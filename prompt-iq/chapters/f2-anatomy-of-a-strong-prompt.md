# The Anatomy of a Strong Prompt

**Principle: a strong prompt answers six questions the model would otherwise guess at: the task, the context, the audience, the constraints, the format and what success looks like. Not every prompt needs all six, but every one you leave out is a decision you have handed to the model.**



## Six parts

| Part | The question it answers | If you leave it out |
|---|---|---|
| **Task** | What exactly should the model do? | It picks the most typical reading of your words |
| **Context** | What is the situation? | It assumes an average situation, not yours |
| **Audience** | Who will read or use the result? | It writes for no one in particular |
| **Constraints** | What limits apply: length, tone, scope, things to avoid? | It uses its defaults, which may not be yours |
| **Format** | What shape should the result take? | You get prose when you needed a table, or the reverse |
| **Success criteria** | How will you judge whether the answer is good? | Any plausible answer looks good enough |

The model has no built-in task list. Everything it knows about what you want comes from these parts, or from its guesses about them.



## One prompt, taken apart

A weak prompt: *"Reply to this customer complaint."*

A stronger one:

> You are a customer support lead. Reply to this complaint from a paying user whose export failed twice. Acknowledge the frustration, apologise briefly, confirm we're investigating, and offer a concrete next step, such as an email within 24 hours. Keep it under 150 words. Sign off as "Support Team".

Taken apart:

* **Task:** reply to the complaint.
* **Context:** a paying user, an export that failed twice, an investigation under way.
* **Audience:** the customer, written by a support lead.
* **Constraints:** under 150 words, a brief apology.
* **Format:** an email reply with a fixed sign-off.
* **Success criteria:** partly implied. The reply acknowledges, apologises, confirms and offers a next step.

The last part is the one most often left implicit, and it is the one you need most when the answer comes back. Writing it down makes the check quick: did the reply do all four things?



## Not every prompt needs all six

In the main book's [restaurant metaphor](book.html#metaphor), a simple dinner at home doesn't need every step that a large event does. Prompts are the same. "Translate this sentence into French" needs a task and very little else. The more the answer matters, and the more your situation differs from the typical one, the more of the six parts you need.



## The bridge: the information lifecycle

Each part of a prompt maps onto a step from [Informational Thinking](book.html#a2):

* **Task** is the question behind your decision ([Information vs Data](book.html#a1)).
* **Context** is what you [collected](book.html#a2a) and [checked](book.html#a2b).
* **Audience** and **format** are [structure](book.html#a2e): shaping information for the person who will use it.
* **Constraints** are the scope you would set in [Plan and Prepare](book.html#b2): what is in and what is out.
* **Success criteria** are the definition of *done* from [Project Management Thinking](book.html#b0).

**Where this departs:** in the main book, these steps happen over hours or days. In a prompt, they happen in a paragraph. That is not a reason to skip them, only to make each one short.



## What to do differently

Before you send your next prompt that matters, check it against the six parts. For each one that is missing, ask: *am I happy with the model's guess here?* If yes, leave it out. If not, add one line.

Always write the success criteria, even if you don't put them in the prompt. You'll need them to judge the answer.
