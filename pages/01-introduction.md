---
title: 🐼 What are `pandas` limits?
---

# 🐼 What are `pandas` limits?

Time for a little guessing game

<v-clicks>

<blockquote style='font-size:18px'>
"Nowadays, my rule of thumb for <code>pandas</code> is that you should have <b>5 to 10 times as much RAM as the size of your dataset</b>"
</blockquote>

<p align='right'><i>Wes McKinney, <code>pandas</code> creator and co-founder/CTO of Voltron Data</i></p>

<blockquote style='font-size:18px'>
"But first, it’s worth considering not using pandas [when scaling to large datasets]"
</blockquote>

<p align='right'><i><code>pandas</code> documentation</i></p>

</v-clicks>


---

# 🐼 What are `pandas` limits?
A little rundown


<v-clicks>

* Single-threaded: cannot be natively parallelised (could be handy with `groupby` operations).
* Eager mode:
  * Must work with data in-memory (batching is not really an option: just [4 results](https://pandas.pydata.org/docs/search.html?q=batch) when scanning the docs).
  * Code is executed line by line and cannot be optimised by a query engine.
* Lots of expensive copies are created:

</v-clicks>

<v-click>

<blockquote style='font-size:18px'>

When you write `df[df.c < 0].d.sum()`, pandas creates a temporary DataFrame `df[df.c < 0]` then sums the d column of that temporary object. If df contains a lot of columns, this is ridiculously wasteful. 
</blockquote>
</v-click>

<v-click>

* Appending is costly because the `index` is rebuilt every time
  * use `pd.concat(list_of_small_dataframes)`
</v-click>


---

# 🐼 What are `pandas` limits?
A little rundown

<v-clicks>

* Really expressive syntax, but can be complex/non-intuitive/not-pythonic/inefficient.
* This is especially true of the functional, modern syntax:
  * must resort to `lambdas`.

</v-clicks>

<v-after>

```python{5-7}
import pandas as pd

data = pd.read_csv("path/to/my/file.csv")

data.assign(
    new_col = lambda df: df["old_col"].apply(udf, *args, **kwargs)
)
```

</v-after>


---

# 🎋 Bonus slide: modern `pandas`
A lesson from the `R` crowd

<v-clicks>

Would always recommend the [method chaining](https://tomaugspurger.github.io/posts/method-chaining/), and use the object oriented one within UDF.

* Elegant syntax with lots of nifty tricks
* Visually helpful in isolating pipelines
</v-clicks>


<v-click>

```python{all|9-10|11}
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(15, 5))

(
    df.filter(['fl_date', 'tail_num', 'dep_time', 'dep_delay'])
      .dropna()
      .assign(hour=lambda x: x.dep_time.dt.hour)
      .query('5 < dep_delay < 600')
      .pipe((sns.boxplot, 'data'), 'hour', 'dep_delay')
)

sns.despine()
```
</v-click>


---

# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

By now, we all know Apache Arrow. It's a lot of things:

<v-clicks>

1. "In-memory columnar format, a standardized, language-agnostic specification for representing structured, table-like datasets in-memory".
2. Libraries to read and write to columnar storage formats (chief amongst all, `parquet`).
3. Libraries to perform (fast) computations on columnar data.
4. Physically moving columnar through wires (*Arrow Flight RPC*).
5. A protocol to make *Arrow Flight RPC* talk to SQL databases (*Arrow Flight SQL*).
6. A novel database connector *à la* JDBC/ODBC to make columnar data storages talk to any user and perform conversion to/from row formats when needed (~~*AC⚡DC*~~ *ADBC*).
</v-clicks>


---

# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

<v-click>

Why should we care? Because `pandas` creator, Wes McKinney, co-founded Apache Arrow because he understood it was the only way to **unlock fast data processing** by enabling, among others:

</v-click>

<v-clicks>

* Efficient data types.
* Mapping a dataset without needing to read it all into memory.
* Streaming processing.
* Zero-copy, i.e. a unique API layer to pass data across different libraries: from `pandas` to `polars` or any other dataframe library.
* Also working with hierarchical data.
</v-clicks>

<v-click>

Now we have a data format that enables fast processing. What are we missing? **Query engines**.
</v-click>


---

# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>pandas</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>polars</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>lazy and out-of-core</td>
    </tr>
    <tr>
        <td><code>vaex</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td>out-of-core</td>
    </tr>
    <tr>
        <td><code>duckdb</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
    <tr>
        <td><code>apache-spark</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>cuPy</code>/<code>cuDf</code>/<code>RAPIDS</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td>GPU native; streaming processing</td>
    </tr>
    <tr>
        <td><code>dask</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td>parallel wrapper on top of <code>pandas</code></td>
    </tr>
</table>

---

# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>datafusion</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td><code>spark</code> on Arrow</td>
    </tr>
    <tr>
        <td><code>mars</code></td>
        <td>distributed</td>
        <td>no</td>
        <td><code>ray</code>, <code>kubernetes</code>, <code>hadoop</code></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>xarray</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>numpy</code>, <code>pandas</code>, <code>dask</code></td>
        <td></td>
    </tr>
    <tr>
        <td><code>fugue</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>spark</code>, <code>dask</code>, <code>ray</code></td>
        <td>SQL/<code>pandas</code>/python code</td>
    </tr>
    <tr>
        <td><code>modin</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>ray</code>, <code>dask</code>, <code>unidist</code> (?!)</td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>ibis</code></td>
        <td>wrapper</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
</table>

<br>

🔌 Shameless plug: check out my 🕶️ [`awesome-pandas-alternatives`](https://github.com/baggiponte/awesome-pandas-alternatives), where I collected these frameworks!

---

# ❓ When should I replace `pandas`?
A quick checklist

<v-clicks>

* When the data becomes too big, or queries too complex to express with `pandas` syntax.
* When you need more processing capabilities to perform complex operations.
* If you need distributed computing, `apache-spark` is still popular.
  * `dask` is nice too, but is still just `pandas` with parallelism: no multithreaded, same memory issues.
  * `datafusion` is being quickly developed (in rust, *by the way* 🦀)
  * There are all the (closed) compute engines: databricks, snowflake...
* But maybe setting up a bunch of clusters is a bit too much, and you would like to get away with a performant, in-memory solution... **here is where `polars` shines** 🐻‍❄️✨.

</v-clicks>

