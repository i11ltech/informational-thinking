# Systems Thinking

**Principle: a situation rarely exists on its own. People, processes, tools, incentives and resources interact, and together they produce effects no single part could create. Instead of asking only "what went wrong?", ask "what conditions made this outcome more likely?"**



## What this hat asks

**How do the parts, the loops and the delays interact?**

A missed deadline may look like one person's delay. Seen as a system, it may be connected to unclear ownership, late approvals or competing priorities. Fixing the person changes nothing if the conditions stay the same.

Wear this hat when the same problem keeps coming back, when a fix in one place causes trouble somewhere else, or when the work involves many hands.



## Three habits

* **Map the loops.** Some loops *reinforce*: each turn makes the next one bigger, whether growth or collapse. Others *balance*: they push back against change and hold things steady. Name both, because a problem is often a reinforcing loop with nothing balancing it.
* **Watch for delays.** Actions often take effect long after they happen. When the result is slow to show, people over-correct, and the system swings back and forth.
* **Look for small changes with large effects.** Changing a rule, an information flow or an incentive often does more than pushing harder on one part.



## In a prompt

Models answer the question they are given. Ask "why did this deadline slip?" and you get reasons about that deadline. Ask about the system and you get a different kind of answer:

> Our support team keeps missing its response target, even after we added two people. Map the main parts involved: people, tools, handoffs and incentives. Identify any loop that could be making it worse over time, and any delay between a change and its effect. Suggest one change to a rule or information flow, not to staffing.

The prompt does three things. It gives the history ("even after we added two people"), which hints that the obvious fix has failed. It names the parts to map. And it rules out the brute-force answer, so the model has to look for leverage.

When you read the answer, check for **one-cause explanations**. If everything is blamed on one part, the system view is missing.



## The bridge

[Project Management Thinking](book.html#b0) introduced two system ideas: the *bottleneck*, the one slow step that holds up everything else, and the *critical path*, the chain of dependent steps that sets the earliest finish. [Product Management Thinking](book.html#a0) added *second-order thinking*: looking past the first effect to the ones that follow.

**Where this departs:** those tools are used to manage a project or a product. Here the system is often the situation you are describing to a model, and the model knows only the parts you mention. If you leave out the handoff, the incentive or the delay, the model can't see the loop.



## What to do differently

Before you ask a model about a problem that keeps recurring, sketch the system in three lines:

1. **Parts:** who and what is involved, including the handoffs between them.
2. **Loop:** what might be feeding the problem, and what, if anything, holds it back.
3. **Delay:** how long it takes for a change to show.

Put those lines in the prompt. If you can't fill in line 2, ask the model to suggest what the loop might be, and treat its answer as a hypothesis to check.
