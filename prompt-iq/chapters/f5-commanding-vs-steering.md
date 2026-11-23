# Commanding vs Steering

**Principle: commanding tells the model what to produce and leaves every other choice to it. Steering makes those choices yourself: role, audience, constraints, reasoning and follow-up. Command when the model's defaults are good enough. Steer when the answer matters.**



## Two ways to ask

* **Commanding** gives a direct instruction: "Summarise this." The model chooses the length, the style and what to focus on.
* **Steering** supplies the choices: "You are an executive assistant. Summarise this meeting transcript in four bullet points. Focus on decisions and action items. Then list any open risks." You have chosen the length, the focus and the format.

Another pair:

* **Commanding:** "Write an email."
* **Steering:** "You are replying to a client who asked for a project delay. Write a short, apologetic email. Propose a new deadline of 15 March. Tone: professional and reassuring."

Steering doesn't stop at one message. It continues across turns: you read the answer, then guide the next one. "Shorter." "More factual, less sales-like." "Add that it works with our calendar."



## The trade-off

Commanding is fast. It works well for quick lookups and for tasks with a rigid, well-known form, where the model's defaults are what you would have chosen anyway.

Its cost is that the answers are often generic, and you may end up retrying several times without knowing why each attempt missed. Steering takes more effort up front, but the results are more accurate and closer to what you need, especially on complex tasks.



## Vending machine or vehicle

Commanding treats the model like a vending machine: put in the right words, get out the right answer. If the answer is wrong, you try different words.

Steering treats it like a vehicle: you set the direction, watch where it is going, and correct as you go. This is what the [Preface](#preface) meant by staying in the driver's seat. Every choice you make is a choice you understand, and when the answer comes back you can tell whether it went where you pointed it.

A note on the word: in AI research, *steering* can also mean changing a model's internal workings while it runs. This book means something simpler: guiding the model through what you tell it.



## The bridge: project management

Steering is [Execute and Monitor](book.html#b3) and [Adapt and Iterate](book.html#b5) on a small scale: act, watch, correct. Commanding is a plan with no monitoring. That is fine when little can go wrong, and risky when a lot can.

**Where this departs:** in a project, monitoring happens over days and weeks. With a model, one cycle of steering takes seconds. That makes it cheap to steer, so there is little excuse not to when the result matters.



## What to do differently

Before you send a prompt, list the choices the model will make for you: length, tone, focus, format, what to leave out. For each one, ask: *am I happy with its default?*

* If you are happy with all of them, command. It is the faster route.
* If any matter, make those choices in the prompt, and plan your first follow-up before you read the answer.
