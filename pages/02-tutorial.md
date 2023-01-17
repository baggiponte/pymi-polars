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

```python{all|7|9}
import polars as pl

df = pl.read_csv("https://j.mp/iriscsv")
df.filter(
    pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
)
```

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


---

# 🔍 `polars` fundamentals 
`polars` fundamentals: `contexts` and `expressions`


---

# 💤 Lazy execution
When the data is stored locally

```python{all|3|4-6|7}
import polars as pl

pl.scan_csv("https://j.mp/iriscsv")
.filter(pl.col("sepal_length") > 5)
.groupby("species", maintain_order=True)
.agg(pl.all().sum())
.collect()
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
