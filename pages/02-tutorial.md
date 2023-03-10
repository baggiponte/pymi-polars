---
title: 'π»ββοΈ Enter: `polars`'
layout: two-cols
---

# π»ββοΈ Enter: `polars`
Who is that PokΓ©mon? 

<v-clicks>

* Arrow columnar format as the memory model.
* Eager and lazy execution.
* Hybrid Streaming (larger than RAM).
* Multi-threaded.
* Powerful expression API.
* Query optimization.
* Implemented in *rust* π¦
</v-clicks>

::right::

<v-after>
<iframe class="absolute top-35" src="https://giphy.com/embed/2dK0W3oUksQk0Xz8OK" width="480" height="204" frameBorder="0"></iframe>
</v-after>


---

# π»ββοΈ Enter: `polars`
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

# π»ββοΈ Enter: `polars`
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

# π `polars` fundamentals 
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
ββββββββββββββ¬βββββββββββββββ¬ββββββββββββββ¬βββββββββββββββ¬ββββββββββββββ
β species    β sepal_length β sepal_width β petal_length β petal_width β
β ---        β ---          β ---         β ---          β ---         β
β str        β f64          β f64         β f64          β f64         β
ββββββββββββββͺβββββββββββββββͺββββββββββββββͺβββββββββββββββͺββββββββββββββ‘
β setosa     β 116.9        β 81.7        β 33.2         β 6.1         β
ββββββββββββββΌβββββββββββββββΌββββββββββββββΌβββββββββββββββΌββββββββββββββ€
β versicolor β 281.9        β 131.8       β 202.9        β 63.3        β
ββββββββββββββΌβββββββββββββββΌββββββββββββββΌβββββββββββββββΌββββββββββββββ€
β virginica  β 324.5        β 146.2       β 273.1        β 99.6        β
ββββββββββββββ΄βββββββββββββββ΄ββββββββββββββ΄βββββββββββββββ΄ββββββββββββββ
```
</v-click>


---

# π `polars` fundamentals 
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

# π `polars` fundamentals 
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
ββββββββ¬ββββββββ¬βββββββββββ¬βββββββββ¬ββββββββββ¬ββββββββ
β nrs  β names β random   β groups β nrs_sum β count β
β ---  β ---   β ---      β ---    β ---     β ---   β
β i64  β str   β f64      β str    β i64     β u32   β
ββββββββͺββββββββͺβββββββββββͺβββββββββͺββββββββββͺββββββββ‘
β 1    β foo   β 0.154163 β A      β 11      β 5     β
β 2    β ham   β 0.74005  β A      β 11      β 5     β
β 3    β spam  β 0.263315 β B      β 11      β 5     β
β null β egg   β 0.533739 β C      β 11      β 5     β
β 5    β null  β 0.014575 β B      β 11      β 5     β
ββββββββ΄ββββββββ΄βββββββββββ΄βββββββββ΄ββββββββββ΄ββββββββ
```
</v-clicks>


---

# π `polars` fundamentals 
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
βββββββββ
β names β
β ---   β
β u32   β
βββββββββ‘
β 2     β
βββββββββ
```
</v-clicks>


---

# π `polars` fundamentals 
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
ββββββββββββ
β literal  β
β ---      β
β f64      β
ββββββββββββ‘
β 1.695791 β
β 0.0      β
β 2.896465 β
β 0.0      β
β 0.160325 β
ββββββββββββ
```
</v-clicks>


---

# π `polars` fundamentals 
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
ββββββββ¬ββββββββ¬βββββββββββ¬βββββββββ¬βββββββββββββββββββββ¬ββββββββββββββ
β nrs  β names β random   β groups β sum[random]/groups β random/name β
β ---  β ---   β ---      β ---    β ---                β ---         β
β i64  β str   β f64      β str    β f64                β list[f64]   β
ββββββββͺββββββββͺβββββββββββͺβββββββββͺβββββββββββββββββββββͺββββββββββββββ‘
β 1    β foo   β 0.154163 β A      β 0.894213           β [0.154163]  β
β 2    β ham   β 0.74005  β A      β 0.894213           β [0.74005]   β
β 3    β spam  β 0.263315 β B      β 0.27789            β [0.263315]  β
β null β egg   β 0.533739 β C      β 0.533739           β [0.533739]  β
β 5    β null  β 0.014575 β B      β 0.27789            β [0.014575]  β
ββββββββ΄ββββββββ΄βββββββββββ΄βββββββββ΄βββββββββββββββββββββ΄ββββββββββββββ
```
</v-clicks>


---

# π `polars` fundamentals 
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

# π `polars` fundamentals 
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

# π `polars` fundamentals 
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
ββββββββββββββ¬ββββββββββββ
β Date       β Close     β
β ---        β ---       β
β date       β f64       β
ββββββββββββββͺββββββββββββ‘
β 1981-01-01 β 23.5625   β
β 1982-01-01 β 11.0      β
β ...        β ...       β
β 2013-01-01 β 464.955   β
β 2014-01-01 β 522.06    β
ββββββββββββββ΄ββββββββββββ
```
</v-clicks>


---

# π `polars` fundamentals 
Tips and tricks

<v-clicks>

There's also support for resampling, like `pandas.DataFrame.resample()`:

```python
df.upsample(time_column="time", every="15m").interpolate().fill_null("forward")
```

```
shape: (13, 3)
βββββββββββββββββββββββ¬ββββββββββ¬βββββββββ
β time                β groups  β values β
β ---                 β ---     β ---    β
β datetime[ΞΌs]        β str     β f64    β
βββββββββββββββββββββββͺββββββββββͺβββββββββ‘
β 2021-12-16 00:00:00 β a       β 1.0    β
β 2021-12-16 00:15:00 β forward β 1.5    β
β 2021-12-16 00:30:00 β a       β 2.0    β
β 2021-12-16 00:45:00 β forward β 2.5    β
β ...                 β ...     β ...    β
β 2021-12-16 02:15:00 β forward β 5.5    β
β 2021-12-16 02:30:00 β a       β 6.0    β
β 2021-12-16 02:45:00 β forward β 6.5    β
β 2021-12-16 03:00:00 β a       β 7.0    β
βββββββββββββββββββββββ΄ββββββββββ΄βββββββββ
```
</v-clicks>


---

# π `polars` fundamentals 
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

# π€ Lazy execution
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

# π€ Lazy execution
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

# π€ Lazy execution
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
