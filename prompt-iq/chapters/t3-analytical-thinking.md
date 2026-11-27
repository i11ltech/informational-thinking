# Analytical Thinking

**Principle: break a complex question into smaller parts that can each be examined, and make your reasoning visible, so anyone, including you later, can follow how you got from information to conclusion. A neat analysis still misleads if its inputs are incomplete or its categories are poorly defined.**



## What this hat asks

**What are the components, the drivers and the trade-offs?**

Analytical thinking turns a vague question into a structured one. It separates variables, compares like with like, and checks whether a pattern is meaningful or coincidental. Wear it when you are structuring a decision, comparing options, or looking for a root cause.



## Three habits

* **Decompose the problem.** Separate the *drivers* (what moves the result), the *constraints* (what limits it) and the *outcomes* (what you are trying to change) into distinct parts.
* **Compare against baselines and trade-offs.** Measure options against clear criteria, not gut feel or the money already spent.
* **Separate correlation from causation.** Two things moving together is not proof that one drives the other. Look for a third factor, or a fair comparison, before claiming a cause.

Two tools help. The **Five Whys** asks "why?" repeatedly until it reaches a root cause rather than a symptom. **Occam's razor** prefers the simplest explanation that fits the facts, though in real situations "all else being equal" rarely holds, so treat it as a starting point, not a verdict.



## In a prompt

Analysis is where a prompt benefits most from structure. Name the criteria, and ask for the reasoning to be shown:

> Compare these three vendor proposals on implementation time, annual cost, accessibility and data portability. Use the same criteria for each. Show the comparison as a table, then state which one you would choose and which criterion decided it.

This asks for decomposition (four named criteria), like-for-like comparison ("the same criteria for each"), and visible reasoning ("which criterion decided it"). Without the criteria, the model chooses its own, and you can't tell which ones it used.

For causes, ask the model to keep its claims honest: "For each possible cause, say whether the evidence shows correlation or causation, and what would confirm it."

When you read the answer, check the inputs before the conclusion. A tidy table built on a wrong figure is still wrong.



## The bridge

This hat is [Interpret](book.html#a2d) from the main book: notice the pattern, test it, then connect it to the decision. The checks there, such as asking whether something outside could explain a change and whether two numbers moving together means one causes the other, are the analytical hat at work.

**Where this departs:** a model can produce an analysis faster than you can read it. That makes the *setup* the part that matters: the criteria, the categories and the inputs you give it. Choosing them is the analytical work, and it stays with you.



## What to do differently

Before you ask a model to analyse anything, write:

1. **The question,** in one sentence.
2. **The criteria** you will judge by.
3. **What you will treat as evidence,** and what as assumption.

Put all three in the prompt, and ask to see the reasoning, not only the answer.
