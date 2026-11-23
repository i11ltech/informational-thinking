# What Makes a Prompt Informative?

**Principle: an informative prompt reduces the model's uncertainty about your situation and your intent. If your prompt could be sent unchanged by anyone else, it tells the model nothing about you, and you will get an answer written for anyone.**



## Information is reduced uncertainty

Claude Shannon defined information in terms of uncertainty: the more a message narrows down what could be true, the more information it carries.

A prompt works the same way. An AI model knows a great deal about the world in general, but nothing about your situation unless you put it in the prompt. It doesn't remember earlier conversations unless they are part of the current context. Every detail you leave out is a gap, and the model fills each gap with the most typical guess. That is why vague prompts get generic answers: generic is what a guess looks like.



## The swap test

Here is a quick way to measure a prompt's informational quotient (IQ): **could this prompt be dropped into someone else's chat and still work unchanged?**

If it could, its IQ is low. If it only makes sense for your situation, because it names the actual constraint, trade-off or sequence, its IQ is high.

The same test works on any sentence. "We need to improve the handoff" could be said in almost any company. Compare: "Sales is promising custom onboarding before implementation confirms capacity, so new customers are waiting two weeks longer than planned." That sentence could only be about one situation, and it tells you what to fix.

For prompts:

* **Low IQ:** "Help with my essay." The model doesn't know the subject, the length or what kind of help you want.
* **Higher IQ:** "Help me improve the thesis and first paragraph of my 500-word history essay on the causes of the First World War. Keep my voice, and suggest edits inline."

The goal isn't more words. It is more of the real situation in fewer words.



## Communicating intent

Facts about your situation are half of it. The other half is *intent*: what you are trying to do with the answer. The same request, "summarise this report", needs a different answer if you are deciding whether to read it, preparing to argue against it, or briefing your manager.

Intent is the part people leave out most, because it is obvious to them. It isn't obvious to the model.



## The bridge: information vs data

In [Information vs Data](book.html#a1), data becomes information only when it answers a question someone needs answered to decide something. A prompt is the same. A prompt full of general words is data: true, but not about anything in particular. A prompt built around your question and your situation is information.

**Where this departs:** in the main book you are usually the one receiving the information. Here you are the one sending it, and the reader is a model that can't ask what you meant unless you invite it to. The burden of being specific is on you.



## What to do differently

Take the disappointing prompt you kept from the [Preface](#preface).

1. Run the swap test: could someone else have sent it unchanged?
2. Underline every phrase that could fit almost any situation.
3. Replace each one with the specific fact, constraint or choice it stands for.
4. Add one sentence of intent: "I need this to …"

Send both versions and compare the answers.
