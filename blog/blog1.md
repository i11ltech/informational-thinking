# A Gym for Your Thinking

*From the book: [About](book.html#about). This first post explains what this site is for, and why now is the time to use it.*



For most of human history, nobody needed a gym.

Hunter-gatherers ran, lifted, carried and walked long distances because that was how they ate. Exercise wasn't something they did. It was simply part of the day. Then work moved to fields, then to factories, and eventually to desks. The movement went out of daily life, and the body still needed it. So people started exercising on purpose: in military training, in gymnasiums, and now in the gym down the road.

We are at the same turning point again, this time with thinking.

Every month we hand more of our thinking to AI. It drafts the email, summarizes the report, writes the code and suggests the plan. That is genuinely useful. But a muscle you stop using gets weaker. If AI does all the noticing, checking and reasoning, we slowly drift into accepting whatever it gives us.

This site is a gym for the thinking you still need to do yourself.



## The hard part didn't go away

In a recent talk, [Satya Nadella](https://www.youtube.com/watch?v=0NE89Nzfk20) put it plainly: generating code has become cheap, but checking that it is correct is still hard. One proposed fix is to have another model critique the work. That brings its own problems. A model can reach its goal in ways nobody wanted, such as making the tests pass by deleting the ones that fail.

He also described the team that builds Cowork, the AI agent in Microsoft 365 apps: 11 developers who have learned to use AI for their work. In his words, "They build a software factory that builds the product. They don't build the product." And he expects the same shift everywhere: "That level of direction is what, by the way, is going to happen in all jobs."

Two things stand out to me.

**First, verification is still a human job.** AI can produce an answer in seconds. Deciding whether it is right still means knowing what you expected, which details matter, and what would make you doubt the answer. That is a thinking skill, not a tool.

**Second, building the factory is thinking one level up.** If you direct the work instead of doing it, the quality of your direction becomes the quality of the result. That means a clear goal, the right context, honest constraints and a definition of done. Vague direction gets you a confident factory turning out the wrong thing.

Microsoft's answer to the skills gap is telling. Satya also spoke about a new program, [preceptorship for AI-accelerated development](https://newsletter.pragmaticengineer.com/p/software-engineering-after-code-becomes). The idea is borrowed from nursing, where new nurses are paired with experienced ones to build real-world experience and confidence. Here, experienced software engineers act as preceptors. They coach "preceptees" to use AI tools thoughtfully while building strong systems thinking, taste and judgement. Note what is being passed on. It isn't which buttons to press. It's judgement: what to ask for, what to check, and when to say no. That is the muscle this site trains, and it works well as a shared reference for both sides of that pairing.

His advice for getting ahead with AI was to stop reading and listening about it, and start using it more. I'd add one thing: use it *informationally*.



## So what is informational thinking?

The [Glossary](book.html#glossary) defines it as **the habit of turning data into information you can act on**. It has three parts:

* **An eye for detail:** noticing which data is relevant.
* **Sense-making:** turning that data into insight.
* **Creativity:** using the insight to build something that works.

In practice, it looks like a few small habits. You notice what matters. You check what is actually known. And you make your uncertainty visible instead of hiding it.

There is plenty of content out there on prompt engineering: templates, tricks, magic phrases. This site is different. It is about asking better questions and reasoning more clearly, which is what makes a prompt good in the first place.

That pays off twice:

1. **You get better at reasoning.** The habits work whether or not AI is in the room.
2. **You give AI richer context.** Clear thinking turns into clear prompts, and clear prompts get better answers.



## It isn't about saying more

Here is the part most people get backwards. Informational thinking isn't about adding more words, more data or longer explanations. Volume is not information. [Information vs Data](book.html#a1) makes the point that data becomes information only when it answers a question someone needs answered to decide something.

So the aim is to make the important parts of a situation clear enough to act on, and to leave out the rest.

When those parts are missing, you feel it later:

* **An unclear goal** means people do good work on the wrong thing.
* **An undefined term** means two people agree while meaning different things.
* **A missed constraint** means the plan breaks when it meets reality.

The bill comes as rework, delays and conversations that go in circles.

The fix is usually small. It helps to say three things out loud: **what you know, what you are assuming and what you still need**. Then other people, and AI, can respond to your actual situation instead of guessing at it. It also helps to label your claims:

* a **fact** has been checked;
* an **estimate** is a reasoned guess;
* a **possibility** might happen;
* a **prediction** is a bet on what will happen.

Mixing them up is how a forecast quietly turns into a promise.



## One request, before and after

Here is the kind of message that gets sent every day:

> "Can you put together something on the Q3 numbers for Monday?"

It feels clear to the person who wrote it, because everything missing is in their head. The person who receives it has to guess. Something for whom? Which numbers? A chart, a memo or a deck?

Now add four things: the **goal**, the **context**, the **constraints** and what **success** looks like:

> "On Monday, the leadership team decides whether to keep funding the European pilot. Can you prepare a one-page summary of the pilot's Q3 numbers? Use the finance dashboard figures and note anything you couldn't verify. It's a good summary if they can make the call in five minutes."

It is longer, but every added word changes the answer. That is the test.

The same move works with AI. A strong prompt names the **audience**, the **purpose**, the **context**, the **constraints** and the **output format**. [The Anatomy of a Strong Prompt](prompt-iq.html#f2) in Prompt IQ goes through each part. The thinking comes first, and the prompt simply carries it.



## What you'll find here

The site draws on four fields that have handled information for a long time: information architecture, software engineering, product management and project management. Each chapter names the idea it borrows and where it goes further.

* **[The Book](book.html)** is the spine: short chapters, principles only.
  * Section A is about choosing the right information, from collecting data to structuring it for a decision.
  * Section B is about using it right: planning, doing, reviewing and adapting.
* **[Prompt IQ](prompt-iq.html)** applies the same thinking to the prompts you write. It includes the "thinking hats": systems, analytical, critical, strategic and others.
* **The blog**, starting with this post, takes one idea at a time and applies it to a real situation.

The goal is that you leave each page able to *do* something differently, not just know something new.



## How to train

Treat AI like a punching bag for your thinking. Don't just ask it for the answer. Use it to:

* test your question;
* argue with your plan;
* show you what you assumed without noticing.

The work happens on your side: deciding what matters, checking what comes back, and choosing what to do with it.



## Your first exercise

Find one vague request you sent or received this week: an email, a ticket, a message, or a prompt. Rewrite it with four additions:

1. **Goal:** what decision or outcome is it for?
2. **Context:** what does the other person need to know that only you know?
3. **Constraints:** time, budget, scope, and anything that must not change.
4. **Success:** how will you both know it worked?

Then compare the two versions and ask yourself which one you would rather receive.

That's one exercise done. Then start with the [Preface](book.html#preface).
