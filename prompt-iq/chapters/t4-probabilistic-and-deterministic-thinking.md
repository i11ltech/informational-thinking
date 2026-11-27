# Probabilistic and Deterministic Thinking

**Principle: know which kind of claim you are dealing with. Some outcomes follow every time the conditions are met. Others are only likely. Treating a likelihood as a certainty turns a forecast into a promise, and AI answers make this mistake easy, because a probable answer is written as confidently as a certain one.**



## Two ways of reasoning about outcomes

* **Deterministic thinking** asks what follows when the relevant conditions are known and fixed. "If the system receives no power, it will shut down."
* **Probabilistic thinking** weighs how likely different outcomes are, instead of treating one as guaranteed. "Based on past results, this change is likely to reduce delays, but it can't guarantee that every delivery arrives on time."

Both are useful. The mistake is using one where the other belongs: demanding certainty from a forecast, or hedging a fact that is simply true.

Wear this hat when interpreting data, making forecasts, or deciding with incomplete information.



## Three habits

* **Tell certainty from likelihood.** For each claim, ask: does this follow every time, or only usually?
* **Don't turn forecasts into promises.** A range ("likely done between Tuesday and Friday") is more honest than a single date, and more useful for planning.
* **Communicate uncertainty clearly.** Say how confident you are, what the confidence rests on, and what would change it.



## Why this matters more with AI

A language model works by estimating probabilities. At each step it predicts the likely next word given everything so far. So its answers are probabilistic by nature: ask the same question twice and you may get two different answers, as [Product Management Thinking](book.html#a0) noted.

Two consequences follow:

* **A fluent answer is not a certain answer.** The model's tone doesn't change with its reliability, so you have to ask about reliability directly.
* **Deterministic tasks need deterministic checks.** If an answer must be exactly right, such as a calculation, a date or a quotation, verify it against the source instead of trusting the prose.



## In a prompt

Ask the model to separate the two kinds of claim:

> Separate confirmed information from estimates in your answer. For each estimate, say roughly how confident you are and what it depends on. Flag any conclusion that rests on an assumption you couldn't verify.

And frame your own requests to match the kind of answer you need. "Will this change reduce delays?" invites a yes or no. "How likely is this change to reduce delays, and what would make it fail?" invites a probabilistic answer, which is the honest kind.



## The bridge

[Project Management Thinking](book.html#b0) recommended forecasting in ranges rather than single dates, because a single date hides how uncertain it is. [Interpret](book.html#a2d) ended with stating what would change your mind. Both are probabilistic thinking in practice.

**Where this departs:** in project work, uncertainty is mostly about the future. With AI, it is also about the answer itself. Even a statement about the past can be uncertain when it comes from a model, until you have checked it.



## What to do differently

In the next answer you get from a model that you plan to act on, mark each claim:

* **C** for certain: you checked it, or it follows by definition.
* **L** for likely: a reasonable estimate.
* **?** for unknown: it sounds right, but you have no basis to trust it.

Act on the C's. Plan around the L's. Check the ?'s before they reach anyone else.
