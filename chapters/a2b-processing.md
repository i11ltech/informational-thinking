# Process

**Principle: check data before you trust it, and make it comparable before you compare it. Processing is the step most people skip, because a mistake made here doesn't look like a mistake. It passes quietly into every step after it.**



## Why this step gets skipped

Once you have collected data, the pull is to start looking for the answer. Checking feels like delay. And unchecked data rarely announces itself: a chart built on a wrong number looks exactly like a chart built on a right one.

That is what makes processing different from the other steps. When collecting goes wrong, you often notice something is missing. When processing goes wrong, everything looks complete. The error only shows up later, as a confident answer that turns out to be wrong.

Processing has two jobs: **check** the data, and **prepare** it.



## Check: can I trust it?

Information literacy judges a source by its accuracy, currency, authority, purpose and hidden bias. One common version of this checklist is known as the CRAAP test. Applied to data, with one addition for completeness, the questions become:

* **Currency:** how old is it? Is it still true?
* **Authority:** who produced it, and how did they get it?
* **Accuracy:** can you check it against a second source, or against what you already know?
* **Purpose and bias:** why was it recorded? Data collected to make someone look good is not neutral.
* **Completeness:** what is missing, and does the gap fall somewhere that matters?

You won't be able to answer all of these every time. That's fine. The aim is to know what you *don't* know about the data before you lean on it.



## Prepare: can I compare it?

Data from different sources rarely lines up. Before you put two numbers side by side, make sure they are the same kind of thing:

* **Same definitions:** does "customer" or "done" mean the same in both sources?
* **Same units and periods:** the same currency, the same week, the same scale.
* **No double counting:** the same item shouldn't appear twice under different names.

Preparing is also where you drop *noise*, the data that does not bear on your question. You chose what to collect with the question in mind. Now that you can see the data, cut what turned out not to matter.



## The bridge: data as a product

Product management's idea of treating **data as a product** includes standards a data product must meet. Two of them belong to this step. A data product must be **trustworthy**, backed by quality checks. It must also be **self-describing**, carrying documentation that says what each field means and where it came from.

The same holds when the user is an AI tool. The quality of answers you get from asking questions of a dataset depends on how well the tool understands what the data means and how clean the data is. The tool will process whatever you give it, without complaint.

**Where this book departs:** data products are maintained by teams, with agreed service levels and automated checks. You usually have one decision and a few minutes. So for you, *self-describing* shrinks to a single habit: write down what you checked and what you couldn't. That note travels with the data into the next steps, so that whoever interprets it, you or an AI tool, knows how far to trust it.



## What to do differently

For each piece of data you collected in [Collect](#a2a):

1. Answer four questions in a few words: **Where did it come from? How old is it? What does each term mean in this source? What is missing?**
2. If you are comparing two sources, check that the definitions, units and periods match.
3. Write one line headed **Known limits**, such as "covers March only" or "self-reported, not checked". Keep it with the data.

If you can't fill in the known-limits line, you haven't processed the data. You have only collected it.
