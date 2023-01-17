---
title: '🐻‍❄️ Enter: `polars`'
layout: two-cols
---

# 🐻‍❄️ Enter: `polars`
Who is that Pokémon? 

<v-clicks>

* Arrow columnar format as the memory model.
* Eager and lazy execution.
* Hybrid Streaming (larger than RAM).
* Multi-threaded.
* Powerful expression API.
* Query optimization.
* Implemented in *rust* 🦀
</v-clicks>

::right::

<v-after>
<iframe class="absolute top-35" src="https://giphy.com/embed/2dK0W3oUksQk0Xz8OK" width="480" height="204" frameBorder="0"></iframe>
</v-after>


---

# 🐻‍❄️ Enter: `polars`
General features

<v-clicks>

* Copy-on-write (COW) semantics
  * "Free" clones
  * Cheap appends
* Appending without clones
* Column oriented data storage
  * No block manager (i.e. predictable performance)
* Missing values indicated with bitmask
  * NaN are different from missing
  * Bitmask optimizations
* Efficient algorithms
* Very fast IO
  * Its csv and parquet readers are among the fastest in existence
</v-clicks>


---

# 🐻‍❄️ Enter: `polars`
Query optimizations

<v-clicks>

* Predicate pushdown
  * Filtering at scan level
    * e.g. lazy eval, i.e. dataset is *only* mapped into memory rather than read
* Projection pushdown
  * Projection at scan level
* Aggregate pushdown
  * Aggregations at scan level
* Simplify expressions
* Parallel execution of physical plan
* Cardinality based groupby dispatch
  * Different groupby strategies based on data cardinality
* SIMD vectorization (single instruction multiple data)
* NumPy universal functions

</v-clicks>


---

# 🔍 `polars` fundamentals 
Quick start

```python{all|4,8|5-8|5,7|all}
import polars as pl

df = pl.read_csv("https://j.mp/iriscsv")
df.filter(
    pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
)
```

<v-click>

```
shape: (3, 5)
┌────────────┬──────────────┬─────────────┬──────────────┬─────────────┐
│ species    ┆ sepal_length ┆ sepal_width ┆ petal_length ┆ petal_width │
│ ---        ┆ ---          ┆ ---         ┆ ---          ┆ ---         │
│ str        ┆ f64          ┆ f64         ┆ f64          ┆ f64         │
╞════════════╪══════════════╪═════════════╪══════════════╪═════════════╡
│ setosa     ┆ 116.9        ┆ 81.7        ┆ 33.2         ┆ 6.1         │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ versicolor ┆ 281.9        ┆ 131.8       ┆ 202.9        ┆ 63.3        │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ virginica  ┆ 324.5        ┆ 146.2       ┆ 273.1        ┆ 99.6        │
└────────────┴──────────────┴─────────────┴──────────────┴─────────────┘
```
</v-click>


---

# 🔍 `polars` fundamentals 
`polars` fundamentals: `contexts` and `expressions`

<v-clicks>

`expressions` are an abstraction over simple column manipulations, as well as more complex ones such as groupbys and joins.
Each expression maps a `Series` into another one.

```python
pl.col("foo").sort().head(2)
```

`expressions` can only be used within `contexts` that are "opened" by three special verbs:

* selection: `df.select([...])`
* groupby aggregation: `df.groupby([...]).agg([...])`
* hstack/adding columns: `df.with_columns([...])`

```python
df.select([
    pl.col("foo").sort().head(2),
    pl.col("bar").filter(pl.col("foo") == 1).sum()
])
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
`polars` fundamentals: `contexts` and `expressions`

`expressions` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

```python
# add new columns to the dataframe
df = df.with_columns(
    [
        pl.sum("nrs").alias("nrs_sum"),
        pl.col("random").count().alias("count"),
    ]
)
```

```
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬─────────┬───────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ nrs_sum ┆ count │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---     ┆ ---   │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ i64     ┆ u32   │
╞══════╪═══════╪══════════╪════════╪═════════╪═══════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 11      ┆ 5     │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 11      ┆ 5     │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 11      ┆ 5     │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 11      ┆ 5     │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 11      ┆ 5     │
└──────┴───────┴──────────┴────────┴─────────┴───────┘
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
`polars` fundamentals: `contexts` and `expressions`

`expressions` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

```python
# expressions can be nested
out = df.select(
    [
        pl.col("names").filter(pl.col("names").str.contains(r"am$")).count(),
    ]
)
```

```
shape: (1, 1)
┌───────┐
│ names │
│ ---   │
│ u32   │
╞═══════╡
│ 2     │
└───────┘
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
`polars` fundamentals: `contexts` and `expressions`

`expressions` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

```python
# you have a lot of syntactic sugar
out = df.select(
    [
        pl.when(pl.col("random") > 0.5).then(0).otherwise(pl.col("random")) * pl.sum("nrs"),
    ]
)
```

```
shape: (5, 1)
┌──────────┐
│ literal  │
│ ---      │
│ f64      │
╞══════════╡
│ 1.695791 │
│ 0.0      │
│ 2.896465 │
│ 0.0      │
│ 0.160325 │
└──────────┘
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
`polars` fundamentals: `contexts` and `expressions`

`expressions` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

```python
# also window functions
df = df.select(
    [
        pl.col("*"),  # select all
        pl.col("random").sum().over("groups").alias("sum[random]/groups"),
        pl.col("random").list().over("names").alias("random/name"),
    ]
)
```

```
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬────────────────────┬─────────────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ sum[random]/groups ┆ random/name │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---                ┆ ---         │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ f64                ┆ list[f64]   │
╞══════╪═══════╪══════════╪════════╪════════════════════╪═════════════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 0.894213           ┆ [0.154163]  │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 0.894213           ┆ [0.74005]   │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 0.27789            ┆ [0.263315]  │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 0.533739           ┆ [0.533739]  │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 0.27789            ┆ [0.014575]  │
└──────┴───────┴──────────┴────────┴────────────────────┴─────────────┘
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
`polars` fundamentals: `contexts` and `expressions`

But you can do these with `pandas` too! Or, can you?

<v-clicks>

```python
out = df.groupby("groups").agg(
    [
        pl.sum("nrs"),  # sum nrs by groups
        pl.col("random").count().alias("count"),  # count group members
        # sum random where name != null
        pl.col("random").filter(pl.col("names").is_not_null()).sum().suffix("_sum"),
        pl.col("names").reverse().alias(("reversed names")),
    ]
)
```

Certainly you can, but you might want to define functions to improve on readability and work around some limitations.
Also, you would give up on the free optimisations that come with using `polars`.

</v-clicks>


---

# 🔍 `polars` fundamentals 
Tips and tricks

<v-clicks>

* Do not use lambda functions inside `polars` expressions: they will kill the native parallelism!
  * Chances are, you won't resort to them quite often as the expression syntax covers a lot of use cases.

```python
q = (
    dataset.lazy()
    .groupby("state")
    .agg(
        [
            (pl.col("party") == "Anti-Administration").sum().alias("anti"),
            (pl.col("party") == "Pro-Administration").sum().alias("pro"),
        ]
    )
    .sort("pro", reverse=True)
    .limit(5)
)

df = q.collect()
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
Tips and tricks

<v-clicks>

If you didn't notice: `polars` `DataFrame`s have no indexes!
But there are plenty of ways to work with time series data - `groupby_dynamic` and `groupby_rolling`:

```python{all|3}
df = pl.read_csv("data/appleStock.csv", parse_dates=True)

annual_average_df = df.groupby_dynamic("Date", every="1y").agg(pl.col("Close").mean())
df_with_year = df.with_column(pl.col("Date").dt.year().alias("year"))
```

```
shape: (34, 2)
┌────────────┬───────────┐
│ Date       ┆ Close     │
│ ---        ┆ ---       │
│ date       ┆ f64       │
╞════════════╪═══════════╡
│ 1981-01-01 ┆ 23.5625   │
│ 1982-01-01 ┆ 11.0      │
│ ...        ┆ ...       │
│ 2013-01-01 ┆ 464.955   │
│ 2014-01-01 ┆ 522.06    │
└────────────┴───────────┘
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
Tips and tricks

<v-clicks>

There's also support for resampling, like `pandas.DataFrame.resample()`:

```python
df.upsample(time_column="time", every="15m").interpolate().fill_null("forward")
```

```
shape: (13, 3)
┌─────────────────────┬─────────┬────────┐
│ time                ┆ groups  ┆ values │
│ ---                 ┆ ---     ┆ ---    │
│ datetime[μs]        ┆ str     ┆ f64    │
╞═════════════════════╪═════════╪════════╡
│ 2021-12-16 00:00:00 ┆ a       ┆ 1.0    │
│ 2021-12-16 00:15:00 ┆ forward ┆ 1.5    │
│ 2021-12-16 00:30:00 ┆ a       ┆ 2.0    │
│ 2021-12-16 00:45:00 ┆ forward ┆ 2.5    │
│ ...                 ┆ ...     ┆ ...    │
│ 2021-12-16 02:15:00 ┆ forward ┆ 5.5    │
│ 2021-12-16 02:30:00 ┆ a       ┆ 6.0    │
│ 2021-12-16 02:45:00 ┆ forward ┆ 6.5    │
│ 2021-12-16 03:00:00 ┆ a       ┆ 7.0    │
└─────────────────────┴─────────┴────────┘
```
</v-clicks>


---

# 🔍 `polars` fundamentals 
Tips and tricks

<v-clicks>

Why is it necessary to use `expressions` inside of `contexts`?
Because they are actually syntactic sugar wrappers around the lazy API:

```python
df.groupby("foo").agg([pl.col("bar").sum()])
# is actually running
(df.lazy().groupby("foo").agg([pl.col("bar").sum()])).collect()
```
</v-clicks>


---

# 💤 Lazy execution
When the data is stored locally

```python{all|4|5-7|8}
import polars as pl

( 
    pl.scan_csv("https://j.mp/iriscsv")
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
```


---

# 💤 Lazy execution
When the data is *not* stored locally

```python{all|4|5|6-8|9}
import polars as pl

( 
    pl.read_csv("https://j.mp/iriscsv")
    .lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
```


---

# 💤 Lazy execution
When alternating lazy and eager

```python{all|4,8}
import polars as pl

(
    df.lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
```
