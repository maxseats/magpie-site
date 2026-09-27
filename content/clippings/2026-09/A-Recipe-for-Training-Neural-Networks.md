---
title: "A Recipe for Training Neural Networks"
type: clipping
category: 기술
tags: [딥러닝, 신경망 학습, 디버깅, 모범사례, Karpathy]
clipped: 2026-09-27T12:25:57.772930
clipped_by: "maxseats"
clip_type: URL
url: https://karpathy.github.io/2019/04/25/recipe/
notion_page_id: 3e80c76f-6ccb-81be-961d-f5c0fe64d421
notion_url: https://app.notion.com/p/A-Recipe-for-Training-Neural-Networks-3e80c76f6ccb81be961df5c0fe64d421
---

# A Recipe for Training Neural Networks

## 요약

앤드레이 카르파티가 쓴 뉴럴 네트워크 학습에 관한 실용적 가이드. 딥러닝 라이브러리가 마치 추상화가 완벽한 것처럼 보이지만 실제로는 '새는 추상화(leaky abstraction)'이며, 표준 소프트웨어와 달리 조금만 벗어나도 제대로 동작하지 않는다는 점을 강조한다.

더 심각한 문제로 뉴럴넷 학습은 조용히 실패한다는 점을 지적한다. 레이블 뒤집기 누락, 자기회귀 모델의 오프바이원 버그, 그래디언트 대신 손실을 클리핑하는 실수, 사전학습 체크포인트의 mean 미적용 등 코드가 문법적으로 완전히 옳아도 성능이 낮아지는 방식으로 나타나는 구체적인 사례들을 제시한다.

딥러닝에서 성공과 가장 강하게 연관된 자질은 인내심과 세부 사항에 대한 주의라고 강조하며, 이를 바탕으로 저자가 직접 개발한 체계적인 학습 프로세스를 소개한다. 실무에서 뉴럴넷 디버깅 및 학습을 담당하는 사람이라면 반드시 읽어야 할 글.

## 원본 링크

- https://karpathy.github.io/2019/04/25/recipe/

## 원문 발췌

[description] Musings of a Computer Scientist.

A Recipe for Training Neural Networks Some few weeks ago I posted a tweet on “the most common neural net mistakes”, listing a few common gotchas related to training neural nets. The tweet got quite a bit more engagement than I anticipated (including a webinar :)). Clearly, a lot of people have personally encountered the large gap between “here is how a convolutional layer works” and “our convnet achieves state of the art results”. So I thought it could be fun to brush off my dusty blog to expand my tweet to the long form that this topic deserves. However, instead of going into an enumeration of more common errors or fleshing them out, I wanted to dig a bit deeper and talk about how one can avoid making these errors altogether (or fix them very fast). The trick to doing so is to follow a certain process, which as far as I can tell is not very often documented. Let’s start with two important observations that motivate it. 1) Neural net training is a leaky abstraction It is allegedly easy to get started with training neural nets. Numerous libraries and frameworks take pride in displaying 30-line miracle snippets that solve your data problems, giving the (false) impression that this stuff is plug and play. It’s common see things like: &gt;&gt;&gt; your_data = # plug your awesome dataset here &gt;&gt;&gt; model = SuperCrossValidator ( SuperDuper . fit , your_data , ResNet50 , SGDOptimizer ) # conquer world here These libraries and examples activate the part of our brain that is familiar with standard software - a place where clean APIs and abstractions are often attainable. Requests library to demonstrate: &gt;&gt;&gt; r = requests . get ( 'https://api.github.com/user' , auth = ( 'user' , 'pass' )) &gt;&gt;&gt; r . status_code 200 That’s cool! A courageous developer has taken the burden of understanding query strings, urls, GET/POST requests, HTTP connections, and so on from you and largely hidden the complexity behind a few lines of code. This is what we are familiar with and expect. Unfortunately, neural nets are nothing like that. They are not “off-the-shelf” technology the second you deviate slightly from training an ImageNet classifier. I’ve tried to make this point in my post “Yes you should understand backprop” by picking on backpropagation and calling it a “leaky abstraction”, but the situation is unfortunately much more dire. Backprop + SGD does not magically make your network work. Batch norm does not magically make it converge faster. RNNs don’t magically let you “plug in” text. And just because you can formulate your problem as RL doesn’t mean you should. If you insist on using the technology without understanding how it works you are likely to fail. Which brings me to… 2) Neural net training fails silently When you break or misconfigure code you will often get some kind of an exception. You plugged in an integer where something expected a string. The function only expected 3 arguments. This import failed. That key does not exist. The number of elements in the two lists isn’t equal. In addition, it’s often possible to create unit tests for a certain functionality. This is just a start when it comes to training neural nets. Everything could be correct syntactically, but the whole thing isn’t arranged properly, and it’s really hard to tell. The “possible error surface” is large, logical (as opposed to syntactic), and very tricky to unit test. For example, perhaps you forgot to flip your labels when you left-right flipped the image during data augmentation. Your net can still (shockingly) work pretty well because your network can internally learn to detect flipped images and then it left-right flips its predictions. Or maybe your autoregressive model accidentally takes the thing it’s trying to predict as an input due to an off-by-one bug. Or you tried to clip your gradients but instead clipped the loss, causing the outlier examples to be ignored during training. Or you initialized your weights from a pretrained checkpoint but didn’t use the original mean. Or you just screwed up the settings for regularization strengths, learning rate, its decay rate, model size, etc. Therefore, your misconfigured neural net will throw exceptions only if you’re lucky; Most of the time it will train but silently work a bit worse. As a result, (and this is reeaally difficult to over-emphasize) a “fast and furious” approach to training neural networks does not work and only leads to suffering. Now, suffering is a perfectly natural part of getting a neural network to work well, but it can be mitigated by being thorough, defensive, paranoid, and obsessed with visualizations of basically every possible thing. The qualities that in my experience correlate most strongly to success in deep learning are patience and attention to detail. The recipe In light of the above two facts, I have developed a specific process for myself that I follow when applying a neural net to a new problem,
