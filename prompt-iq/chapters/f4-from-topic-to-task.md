# From Topic to Task

**Principle: a topic is not a task. "Tell me about marketing" names a subject and leaves the model to guess what you want to do with it. Turn the topic into a task by naming what you will use the answer for, then choose a verb that does that job.**



## Why topics get generic answers

Most weak prompts are topics in disguise: "Tell me about marketing." "Explain cloud costs." "Thoughts on remote work?" Each one names a subject. None says what the answer is for.

Faced with a topic, the model does the only thing it can: it gives an overview. An overview is the safe, average answer for someone with no particular purpose. If you had a purpose, the overview is mostly noise.

Compare: "Explain three digital marketing strategies for B2B software companies with under 50 employees." Now there is an audience, a scope and a number. It is closer to a task, but it still doesn't say what you'll *do* with the three strategies. Add that, "so I can choose one to test next quarter", and the model knows to compare them on what matters for that choice.



## Start from the decision

In [Information vs Data](book.html#a1), the advice was to write two lines before looking at any data: the decision, and the question. The same two lines turn a topic into a task:

1. **The decision:** what will I decide or do with this answer?
2. **The question:** what do I need to know to do it?

The kind of question then suggests the verb:

* **Lookup** → *find*, *list*: "List the deadlines in this contract."
* **Comparison** → *compare*: "Compare these two offers on cost, risk and commute."
* **Trend** → *summarise how … has changed*: "Summarise how our support tickets changed over the last six months."
* **Segmentation** → *group*, *separate*: "Group this feedback by type of user."
* **Anomaly** → *flag*: "Flag anything in these figures that looks unusual, and say why."

Other useful task verbs include *draft*, *critique*, *rewrite* and *recommend*. Each asks for a different kind of work. "Explain" and "tell me about" rarely do a job on their own.



## Break big tasks into steps

Some topics hide several tasks. "Create a complete marketing plan for my startup" is really a sequence: identify the audience, choose channels, plan content. Asked all at once, you get a scattered answer that does each part thinly. Asked as steps, each one can be checked before the next builds on it, as in [Execute and Monitor](book.html#b3).



## The bridge

**Where this departs:** in the main book, the question decides which data you collect. In a prompt, the question decides what the model produces, and the model can't tell you that you asked the wrong one. An answer to the wrong question looks as polished as an answer to the right one. That makes getting the task right your job, every time.



## What to do differently

Before your next prompt, write three things:

1. **Topic:** the subject, in a few words.
2. **Use:** "I need this to …"
3. **Task:** a verb, an object and a purpose. For example: "Compare these two job offers on pay, risk and commute, so I can decide by Friday."

Send the task, not the topic.
