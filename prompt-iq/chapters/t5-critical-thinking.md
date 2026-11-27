# Critical Thinking

**Principle: where analytical thinking builds the case, critical thinking tries to break it, fairly. Its purpose is not to find fault, and not to avoid reaching a conclusion, but to make the conclusion stronger by testing it first.**



## What this hat asks

**Where are the flaws, the biases and the weak assumptions?**

Critical thinking asks whether a claim deserves to be believed, and whether the reasoning behind it holds up. Wear it when reviewing plans, claims or high-stakes proposals, and whenever an answer is exactly what you hoped to hear.

Four questions carry most of the work:

* What evidence supports this claim?
* What would count against it?
* Are we treating a guess as a fact?
* Are there other plausible explanations?



## Three habits

* **Surface the hidden assumptions.** List what must be true for the conclusion to hold, then test whether each one is justified.
* **Check for bias.** Watch for *confirmation bias*, noticing only what supports your view; *survivorship bias*, looking only at the cases that made it through; *anchoring*, staying too close to the first number you heard; and samples picked to make a point.
* **Steelman the counter-argument.** State the strongest version of the opposing view before deciding what you believe. If you can only defeat a weak version, you haven't tested your position.

Two related tools: **inversion** asks "how could this fail?" instead of "how will this succeed?", and **strong beliefs, loosely held** means forming a clear view while staying ready to change it when new evidence appears.



## In a prompt

Models tend to agree with the framing they are given. Ask "why is this plan good?" and you will get reasons it is good. To get critical thinking from a model, you have to ask for it explicitly:

> Here is our plan to move all customer onboarding online. List the assumptions it depends on. For each one, say what evidence would show it is wrong. Then give the strongest argument against the plan, as someone who disagrees with it would make it.

Then wear the hat yourself when you read the answer. The model's critique is also a claim, and it can be shallow, generic or wrong. Ask of it the same four questions.

A useful habit when an answer pleases you: ask the model to argue the opposite case. If the opposite case is weak, your confidence is earned. If it is strong, you have learned something before it cost you.



## The bridge

This hat is the "test" step of [Interpret](book.html#a2d) and the confirmation-bias warning that comes with it. It is also the [pre-mortem](book.html#b0): imagining the plan has already failed, and asking why.

**Where this departs:** in a team, someone else usually plays the critic. Working alone with a model, nobody does unless you assign the role, either to the model in your prompt or to yourself when you read the reply.



## What to do differently

Before you act on an AI answer that supports what you already wanted to do:

1. Write down the one assumption it depends on most.
2. Ask the model for the strongest case against it.
3. Decide, in a sentence, why you still believe it, or why you no longer do.
