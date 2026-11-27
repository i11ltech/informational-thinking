# The ~~Devil~~ Data is in the Details

*A prelude to the thinking hats.*

**Principle: before you choose how to think about a problem, look closely at what you actually have. Good decisions often turn on a detail that is easy to miss, and the goal is not to collect every fact, but to find the facts that explain the situation.**



## Details that change the answer

A missing date. A definition that means one thing in one report and another in the next. A small change in a trend. A gap between what was measured and what was assumed. None of these looks important, and each can reverse a conclusion.

So the first habit is to separate two things that usually arrive mixed together:

* **Observations:** what was recorded or seen.
* **Interpretations:** what someone concluded from it.

"Orders fell 8% this month" is an observation. "The new checkout page caused it" is an interpretation. A prompt that blends them asks the model to build on a guess as if it were a fact.



## Four questions to ask any data

* **What do we know?**
* **Where did this information come from?**
* **What might be missing?**
* **Does this detail affect the decision?**

The last question keeps the others in proportion. A detail matters when it changes the meaning of a conclusion, not merely because it is there.



## Slice, dice and think

Raw data is noisy and incomplete until you inspect its structure and try different cuts of it. Three practices:

* **Inspect the granularity.** Check whether an average hides two different groups, a few extreme values, or a seasonal spike.
* **Slice and dice deliberately.** Split the numbers by group, channel, time window or region, and see where the pattern holds and where it breaks.
* **Question the metric.** Confirm what a number actually measures, and what it leaves out, before treating a trend as true.



## In a prompt

Details work in both directions.

**Going in:** the details you include are what the model knows about your situation. A useful test is to label them: "Known: orders fell 8% this month. Assumption: the new checkout page contributed." The model can then treat each one correctly, and so can you when you read the answer.

**Coming back:** answers sound confident whatever their basis. Read them with the same four questions. Where did this figure come from? What does it leave out? Does it change my decision?

You can also ask for the details directly: "Before suggesting causes, list the data you would need to check, and how you would split it."



## The bridge

This is the eye for detail from [Collect](book.html#a2a), the checking habit from [Process](book.html#a2b), and the re-sorting habit from [Organize](book.html#a2c), in one place. Here they are the ground floor. Every hat that follows works on the details you gathered at this stage, and none of them can rescue details that were wrong.



## The hats that follow

The idea of thinking in "hats" is borrowed from the Six Thinking Hats method, which separates thinking into distinct modes so that one problem can be looked at from several angles. The hats in this book are different. They are modes of *informational* thinking, each a way of looking at the same information from a different angle:

* **[Systems Thinking](#t2):** how the parts interact.
* **[Analytical Thinking](#t3):** what the parts are.
* **[Probabilistic and Deterministic Thinking](#t4):** what is certain and what is only likely.
* **[Critical Thinking](#t5):** whether the case holds up.
* **[Strategic Thinking](#t6):** where to aim, given what is changing.
* **[Design Thinking](#t7):** what works for real people.
* **[Paradoxical Thinking](#t8):** how to get past a false choice.

They are not personality types, and they don't have to be used in a fixed order. The aim is to pick the kind of thinking that fits the question in front of you, and to switch when the problem demands it. [Example Activities](#t9) shows how to put them in sequence.



## What to do differently

Take a prompt you are about to send that includes facts about your situation. Before sending it:

1. Label each fact as **known** or **assumed**.
2. Ask what is missing, and add it, or say that it is missing.
3. Cut any detail that wouldn't change the answer.
