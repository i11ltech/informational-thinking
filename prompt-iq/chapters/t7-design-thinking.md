# Design Thinking

**Principle: start with real people and the situations they are trying to get through, not with the technology or the internal process. Understand the need before choosing a solution, and learn through small, cheap experiments instead of assuming your first idea is the best one.**



## What this hat asks

**What would solve real friction, in practice?**

Design thinking combines observation, framing the problem, generating ideas, experimenting and learning. Wear it when the problem is unclear, when the people affected see it differently, or when a solution has to work in real conditions rather than on paper.



## Three habits

* **Observe behaviour in context.** Watch how people actually work around obstacles, rather than relying only on what they say they want.
* **Reframe the problem.** Turn a narrow symptom into a clearer human need. "Users skip step four" becomes "users lose confidence when they can't see their progress." The second framing opens up solutions the first one hides.
* **Prototype to learn cheaply.** Build rough versions quickly, to expose flaws before investing in a full build.

Two tools help generate options once the need is clear. **SCAMPER** prompts new ideas by asking what you could Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate or Reverse. **Reframing questions** look at the challenge from another angle: what else could this mean, where else could this be useful, how does this look to the other people involved?



## In a prompt

Models are quick to jump to solutions. Design-minded prompts hold that back until the need is clear:

> Customers often start our application form and don't finish it. Before suggesting any fixes, list five different reasons a person might stop partway through, each written from the customer's point of view. Then reframe the problem as a human need in one sentence. Only then suggest three small changes we could test in a week, without rebuilding the form.

The prompt asks for perspectives before solutions ("from the customer's point of view"), a reframing ("as a human need"), and cheap experiments ("small changes … in a week").

A model can't watch your users. What it can do is widen your list of possible explanations and ideas. The observing is still yours: the model's reasons for abandoning a form are guesses until you see a real person do it.



## The bridge

Design thinking is the "why" half of [Product Management Thinking](book.html#a0)'s advice to pair numbers with what people say and do, and the "go and see" habit from [Collect](book.html#a2a). Prototyping cheaply is [Plan and Prepare](book.html#b2)'s small test.

**Where this departs:** design teams run research with real users over weeks. With a model, you can rehearse that research in minutes: generate perspectives, reframe, and list experiments. The rehearsal is useful, but it is not the research. Treat everything it produces as a hypothesis to take back to real people.



## What to do differently

Next time you are about to ask a model for a solution, ask first:

1. **Who** is affected, and what are they trying to do?
2. **What** have you actually seen them do, rather than what they said?
3. **What need** sits underneath the symptom?

Put the answers in the prompt, and ask for something small you can test, not something finished you can build.
