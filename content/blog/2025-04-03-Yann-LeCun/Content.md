---
layout: post
title: "Yann LeCun 訪談：大型語言模型觸及瓶頸？JEPA 與 AI 的下一步"
date: 2025-04-03
categories: [
'2025',
'人工智慧',
'大型語言模型',
'Yann LeCun',
'Meta',
'JEPA',
'生成式AI'
]
description: "Meta首席AI科學家 Yann LeCun 討論生成式AI在科學發現上的侷限、大型語言模型的發展瓶頸、理解物理世界的挑戰，並介紹了非生成式的JEPA架構作為未來方向，同時探討開源模型的重要性。"
toc: true # 啟用目錄功能

---

<span class="original-link">原文連結： [Yann LeCun 訪談：大型語言模型觸及瓶頸？JEPA 與 AI 的下一步](https://www.youtube.com/watch?v=qvNCVYkHKfg&ab_channel=AlexKantrowitz)</span>

## 介紹與開場

為什麼生成式 AI 吸收了全世界的知識，卻無法自行達成科學發現？它是否終於開始理解物理世界了？我們將與 Meta 首席 AI 科學家暨圖靈獎得主 Yan LeCun 討論。歡迎收聽 Big Technology Podcast，這是一個針對科技世界及其他領域進行冷靜、細緻對話的節目。我是 Alex Kantrowitz，我非常興奮能歡迎 Yan LeCun，首席 AI 科學家、圖靈獎得主，以及被譽為 AI 教父的人，來到 Big Technology Podcast。Yan，很高興再次見到你，歡迎來到節目。

很高興來到這裡。

## AI、大型語言模型與科學發現的侷限

讓我們從一個關於科學發現的問題開始，以及為什麼 AI 直到目前為止還未能達成科學發現。這個問題來自 Dwarkesh Patel，他在幾個月前提出的。你怎麼看待這個事實：AI，基本上是生成式 AI，已經記住了整個人類知識的語料庫，卻未能建立任何一個導致新發現的連結，然而即使是一個中等聰明的人，如果記住了這麼多東西，他們會注意到，哦，這個東西導致這個症狀，另一個東西導致那個症狀，這裡可能有個醫療解方。所以，我們難道不該期待 AI 能做到那類事情嗎？

嗯，對 AI 來說是的，但對大型神經網路模型則不是。你知道，有好幾種 AI 架構，對吧？然而突然之間，當我們談論 AI 時，我們想到的是聊天機器人。聊天機器人，大型語言模型（LLMs），是用極大量的純文字知識訓練出來的，它們被訓練來基本上是複述、檢索、以及產生符合它們所訓練的任何文本統計特性的答案。你能用它們做到的事情令人驚嘆，這非常有用，毫無疑問。我們也知道它們會產生不真實的幻覺事實。但它們在最純粹的形式下，是無法發明新事物的。

讓我提出一個觀點，這是 Tom Wolf，來自 Hugging Face 的，上週在 LinkedIn 上分享的，我知道你也參與了相關討論，非常有趣。他說，要在資料中心創造一個 Einstein，我們不只需要一個知道所有答案的系統，更需要一個能提出沒人想到或敢問的問題的系統，一個能寫出「如果大家對這件事都錯了呢？」的系統，即使所有教科書、專家和常識都指向相反方向。有沒有可能教導 LLM 做到這點？

不，不，以目前的形式不行。而且，任何能夠做到這點的 AI 形式，都不會是 LLMs。它們可能會使用 LLM 作為其中一個組件。LLMs 對於產生文字很有用，好嗎？所以未來我們可能會在 AI 系統中使用它們，將抽象的想法轉換成語言。在人腦中，這是由這裡一個叫做 Broca 區的微小腦區完成的，大概這麼大。那是我們的 LLM，好嗎？但我們不是用語言思考，我們是用對情況的心智表徵來思考，我們對思考的每件事都有心智模型。即使我們不能說話，我們也能思考。而這發生在這裡，這才是真正的智慧所在。而這部分，我們還沒有複製出來，尤其不是用 LLMs。所以問題是，我們最終會不會有能夠…不只是回答已經存在的問題，而是針對我們指定的問題，提供新的解決方案的 AI 架構、AI 系統？答案是，最終會是的，但不是用目前的 LLMs。然後下一個問題是，它們是否能夠提出自己的問題？像是找出哪些是值得回答的好問題？答案是，最終會是的，但這需要一段時間，我們才能得到具備這種能力的機器。就像，你知道，在人類中，我們擁有一切特徵，我們有些人記憶力極好，他們可以檢索很多東西，擁有大量累積的知識。我們有些人是問題解決者，對吧？你給他們一個問題，他們會解決它。我想 Toma 實際上也在談論這類事情，他說，你知道，如果你在學校表現好，你就是一個好的問題解決者，我們給你一個問題，你能解決它。然後你在數學或物理等科目上得分很高。但是在研究中，最困難的事情實際上是提出正確的、好的問題。什麼是重要的問題？不只是解決問題，也要提出正確的問題，以正確的方式框架一個問題，這樣你才能有新的洞見。然後接下來才是，好吧，我需要把這個轉換成方程式或某種實際的模型。而這可能跟提出正確問題的人，是不同的技能。也可能跟解方程式的人是不同的技能。寫方程式的人不必然是解方程式的人。而記得一百年前某本教科書裡解過類似方程式的人，又是另外一些人。這些是三種不同的技能。所以，LLMs 非常擅長檢索，不擅長解決新問題，也就是找不到新問題的新解方。它們可以檢索現有的解決方案。它們當然完全不擅長提出正確的問題。

對於那些剛接觸並學習這個領域的人來說，LLMs 是像 GPT 模型這樣的技術背後的基礎，這個模型內建在 ChatGPT 中。但讓我問你這個問題，Yan，AI 領域似乎已經從標準的 LLMs 轉向能夠推理、逐步思考的 LLMs。我很好奇，你是否能透過賦予一個推理模型質疑其指令的指示，來編寫這種反直覺或異端的思維？

嗯，所以我們必須弄清楚推理到底意味著什麼，好嗎？顯然地，每個人都在嘗試讓 LLMs 在某種程度上進行推理，也許能夠檢查它們產生的答案是否正確。目前人們處理這個問題的方式是，他們基本上試圖在不完全改變現有範式的情況下，透過修改現有範式來做到這一點，好嗎？所以，你能不能在 LLM 之上加裝幾個輪子，讓你擁有某種原始的推理功能？這基本上就是很多推理系統在做的事情。你知道，讓 LLMs 看起來像在推理的一種方法是「思維鏈」（Chain of Thought），對吧？所以你基本上告訴它們生成比實際需要更多的詞元（tokens），希望在生成這些詞元的過程中，它們會投入更多的計算來回答問題。在某種程度上，這令人驚訝地有效，但非常有限。你實際上並沒有從中得到真正的推理。至少在古典 AI 中，推理在許多領域涉及在潛在解決方案的空間中進行搜索，好嗎？

所以你有一個待解問題，你可以判斷問題是否已解決，所以你有某種方法可以判斷問題是否已解決。然後你在解決方案空間中搜索，尋找一個真正滿足約束條件的，或者被識別為解決方案的方案。你知道，這大概是你能想像的最一般的推理形式。LLMs 中完全沒有這種搜索機制。你必須把它加裝在上面，對吧？所以一種方法是，你讓 LLM 產生大量大量的答案序列，對吧？也就是詞元序列，代表著答案。然後你有一個獨立的系統來挑選哪個是好的，好嗎？這有點像寫程式，透過或多或少隨機生成指令，同時可能遵循語言的語法，然後檢查所有這些程式，看哪個能真正運作。這不是一個好方法，不是一個非常有效率產生正確程式碼的方法，也不是一個好的推理方式。所以，這裡一個大問題是，當人類或動物推理時，我們不是在詞元空間（token space）中進行的。換句話說，當我們推理時，我們不必產生表達解決方案的文本，然後再產生另一個，再產生另一個，然後在我們產生的眾多方案中挑選好的那一個。我們是在內部推理，對吧？我們對情況有一個心智模型，我們在腦中操縱它，然後找到一個好的解決方案。當我們計劃一系列行動，比如，我不知道，造一張桌子之類的。我們計劃行動的順序，你知道，我們腦中有一個心智模型。如果我告訴你，這跟語言完全無關，好嗎？如果我告訴你，想像一個立方體漂浮在我們面前，現在，沿著垂直軸將該立方體旋轉 90 度，好嗎？你可以想像這件事發生，你可以輕易觀察到它是一個立方體，如果我旋轉它 90 度，它看起來會跟開始時的立方體一模一樣，好嗎？因為你有這個立方體的心智模型。而這種推理是在某個抽象的連續空間中，它不是在文本中，它與語言或任何類似的東西都無關。人類一直這樣做，動物一直這樣做。而這是我們目前還無法用機器複製的東西。

是的，這讓我想起你談到思維鏈以及它如何不能產生太多新穎的見解。當 DeepSeek 出來時，一個廣為流傳的截圖是有人要求 DeepSeek 提供關於人類狀況的新穎見解。當你閱讀它時，這是 AI 耍的另一個非常聰明的把戲，因為它看起來像是在遍歷所有這些關於人類的非常有趣的觀察，例如我們如何將我們的仇恨，我們的暴力面，轉化為合作而非競爭，這幫助我們建立更多。然後當你閱讀那個思維鏈時，你會覺得，這有點像是你讀了《人類大歷史》（Sapiens）以及可能其他幾本書，這基本上就是你的思維鏈。
是的，我是說，是的，很多都是複述。

## 大型語言模型是否已達瓶頸？

我現在要把我稍後進行的對話部分移到前面來，那就是關於「牆」的問題。實際上，訓練標準的大型語言模型是否已接近撞牆期？而在這之前，如果你投入一定數量的資料和一定的運算能力來訓練這些模型，你可以預期地讓它們變得更好，這多少是有可預測的回報的。在我們談話的過程中，我感覺你似乎相信，這最終將不再成立。

嗯，我不知道我是否會稱之為一堵牆，但這肯定是報酬遞減。在某種意義上，我們已經耗盡了用來訓練那些 LLMs 的自然文本數據。它們已經用大約 10 的 13 次方或 10 的 14 次方個詞元（tokens）進行了訓練，那是非常多的。非常多。那是整個網際網路，所有公開可用的網際網路內容。然後，一些公司授權了非公開可用的內容。然後還有關於生成人工數據，以及雇用數千人來產生更多數據的討論。

對，還有知識、博士和教授。

是的，但事實上，情況可能比這更簡單，因為大多數系統實際上甚至不理解基本的邏觀輯，例如，對吧？所以，在某種程度上，你知道，沿著這些路線，透過合成數據，透過雇用更多人來填補那些系統知識背景中的漏洞，會有緩慢的進展。但這是報酬遞減，對吧？產生那些數據的成本正在急遽增加，而回報卻不是那麼好。所以我們需要一個新的範式，好嗎？我們需要一種新的系統架構，在其核心，能夠進行那些搜索，以及搜索好的解決方案，檢查該解決方案是否良好，規劃一系列行動以達到特定目標，這就是你真正需要讓一個具備主動性（agentic）的系統運作起來所需要的。每個人都在談論具備主動性的系統，但除了基本上複述系統已經被訓練過的計劃之外，沒有人知道如何建構它們，好嗎？所以，你知道，這就像電腦科學中的一切，你可以工程化一個有限的解決方案。在 AI 的背景下，你可以基於學習或檢索，使用極大量的數據來建立一個系統，但真正複雜的事情，複雜之處在於，你如何建立一個能夠解決新問題，而無需被訓練來解決這些問題的系統？我們能夠做到這一點，動物也能夠做到這一點。面對一個新情況，我們可以要麼「零樣本」（zero-shot）解決它，無需訓練自己來處理那個情況，就在我們第一次遇到它的時候。或者我們可以極快地學會解決它。例如，你知道，我們可以在幾十個小時的練習中學會開車。到某個程度，經過二三十個小時後，它變成了第二天性，變成了某種潛意識，我們不需要思考它。你不需要思考它。你可以…

說到系統一、系統二，對吧？

沒錯。所以，你知道，我們幾年前和 Denny Kahneman 的討論。所以，你知道，你第一次開車時，你的系統二是完全在場的，你必須用它來想像各種災難性的場景和諸如此類的事情，對吧？你的全部注意力都投入到駕駛中。但幾個小時後，你知道，你可以同時和別人說話，就像你不需要思考它一樣，它變得有點潛意識化，或多或少是自動的。它變成了系統一。幾乎我們學會的、完成的每一項任務，第一次我們都必須動用我們心智的全部力量，然後最終，如果我們重複足夠多次，它們就會變得有點潛意識化。我對此有一個生動的記憶，有一次在一個工作坊，其中一位參與者是西洋棋特級大師，他同時和我們大約 50 個人下棋，對吧？你知道，從一個人走到另一個人。我在 10 回合左右就被幹掉了，我下棋很爛，對吧？但是，所以他會過來，來到我的棋盤前，你知道，我有時間思考，因為他，你知道，他正在跟其他 50 桌下棋。所以我在他面前走了一步，他看了看，然後立刻就下了一步。所以他不需要思考。我不是一個足夠有挑戰性的對手，讓他需要真正調用他的系統二。他的系統一就足以擊敗我。這告訴你的是，當你熟悉一項任務並且你訓練自己，你知道，它會變得有點潛意識化。但是，人類和許多動物的本質能力是，當你面對一個新情況時，你可以思考它，找出一個行動序列，一個行動方案來達成目標。而你不需要對情況了解太多，只需要你對世界如何運作的基本常識。這就是我們所缺少的，好嗎？用 AI 系統。

## 投資、時間差與AI寒冬的可能性

好的，現在我真的必須打亂順序了，因為你說了一些非常有趣的事情，我們必須談談。你談到基本上 LLMs，大型語言模型，這些帶我們走到這裡的東西，已經達到了報酬遞減的點，我們需要一個新的範式。但對我來說，似乎那個新的範式還沒有出現。我知道你正在進行相關研究，我們將會談論下一個新範式可能是什麼。但這裡有一個真正的時間軸問題，你不覺得嗎？因為我只是在想那些已經籌集並投入其中的資金。是的。去年 66 億美元給 OpenAI。上週或幾週前，另外 35 億美元給 Anthropic，在他們去年籌集了 40 億美元之後。Elon Musk 又投入了另一筆，你知道，另一筆小財富來打造 Grok。這些都是 LLM 優先的公司。他們沒有在尋找下一個…我的意思是，也許 OpenAI 是，但他們得到的 66 億美元是因為 ChatGPT。那麼這個領域將走向何方？因為如果那些資金被投資到某個處於報酬遞減點、需要新範式才能進步的東西上，那聽起來像是一個真正的問題。

嗯，我的意思是，我們對於這個範式是什麼有一些想法。困難在於，我的意思是，我們正在努力的是讓它運作起來。而且，你知道，這並不簡單，那可能需要，那可能需要數年時間。所以問題是，我們談論的所有這些能力，也許是透過我們正在思考、正在研究的這個新範式，它會來得足夠快，以證明所有這些投資的合理性嗎？如果它來得不夠快，這些投資仍然合理嗎？好嗎？所以你能說的第一件事是，我們不會僅僅透過擴展 LLMs 來達到人類水平的 AI。這根本不可能發生，好嗎？

那是你的觀點，是絕不可能？

絕對不可能。而且，無論你從我一些更大膽的同事那裡聽到什麼，這在未來兩年內都不會發生。絕對不可能，你知道，請原諒我的粗話。那種認為我們將在資料中心擁有一個天才國度的想法，完全是胡扯，對吧？絕對不可能。我們可能會擁有的是，在足夠大量的數據上訓練的系統，以至於任何理性的人可能提出的任何問題，都能透過這些系統找到答案。感覺就像你旁邊坐著一個博士。但你旁邊的不是博士，而是一個擁有巨大記憶和檢索能力的系統，不是一個能夠為新問題發明解決方案的系統。這才是一個博士真正的樣子，好嗎？這實際上，你知道，與 Tom Wolf 發的那篇帖子有關，他提到，你發明新事物，你知道，需要那種你無法從 LLMs 獲得的技能和能力。所以，這裡有個大問題，就是現在進行的投資不是為了明天，不是，它是為了未來幾年。而且大部分的投資，至少從 Meta 這邊來看，是投資於推論（inference）的基礎設施，好嗎？所以，假設到今年年底，這確實是 Meta 的計劃，我們有 10 億用戶透過智慧眼鏡、獨立應用程式等等使用 Meta AI。你得為這些人提供服務，那需要大量的計算。所以這就是為什麼你需要，你知道，在基礎設施上進行大量投資，以便能夠擴展這個規模，並在數月或數年內建立起來。所以，你知道，這就是大部分資金的去向。至少在像 Meta、Microsoft、Google 以及潛在的 Amazon 這樣的公司這邊是這樣。然後有…所以這基本上只是營運。現在，即使沒有範式轉變，是否會有一個讓 10 億人定期使用這些東西的市場？答案可能是肯定的。所以，你知道，即使新範式的革命沒有在三年內到來，這個基礎設施也將被使用，這幾乎沒有疑問，好嗎？所以這是一項好的投資。而且建立資料中心和所有這些東西需要很長時間，你現在就需要開始並規劃，讓進展是持續的。這樣，你知道，最終投資才能被證明是合理的。但你承擔不起不去做的風險，對吧？因為…因為如果你有現金的話，那將會是太大的風險。

但讓我們回到你所說的，現今的東西仍然存在嚴重缺陷。而且一直存在關於它是否會被使用的問題。現在 Meta 正在下這個消費者賭注，對吧？消費者想要使用 AI，這說得通。OpenAI 有 4 億 ChatGPT 用戶。Meta 有 30、40 億…我的意思是，基本上如果你有手機…

30 幾億用戶。

6 億 Meta AI 用戶，對吧？

好的。比 ChatGPT 多。

是的，但使用頻率不如…所以用戶強度沒那麼高。但基本上 Meta 能夠達到 10 億消費者用戶的想法，是的，這似乎是合理的。但問題是，很多這類投資是基於這樣一個想法，即這對企業將會很有用，而不僅僅是一個消費者應用程式。這裡有個問題，因為就像我們一直在談論的，它還不夠好。你看看深度研究（deep research），這是 Benedict Evans 提出來的。深度研究相當不錯，但它可能只能讓你達到 95% 的程度，也許其中 5% 是幻覺。所以如果你有一份 100 頁的研究報告，其中 5% 是錯的，而你不知道是哪 5%，那這就是個問題。同樣地，在現今的企業中，每個企業都在試圖弄清楚如何讓 AI 對他們有用，生成式 AI 對他們有用，以及其他類型的 AI。但只有 10% 或 20% 的概念驗證（proof of concepts）能夠最終投入生產，因為它要麼太貴，要麼不可靠。所以如果這是…如果我們正接近頂峰，你預期會發生什麼？對於所有那些基於它將從這裡變得更好的預期而被推動的一切？

嗯，所以，再次強調，這是一個時間軸的問題，對吧？這些系統什麼時候會變得足夠可靠和智慧，使得部署更加容易？但是，你知道，我的意思是，你描述的這種情況，即在令人印象深刻的演示之後，實際部署可靠的系統才是事情往往會失敗的地方，在使用電腦和技術，尤其是 AI 時，這並不是什麼新鮮事。這基本上是…你知道，為什麼我們在 10 年前有超級令人印象深刻的自動駕駛演示，但我們仍然沒有第五級自動駕駛汽車，對吧？最後一哩路才是真正困難的。對汽車來說，可以這麼說，你知道，是最後的…最後幾個…那不是故意的…你知道，最後幾個百分點的可靠性，這才使得一個系統變得實用。以及你如何將它與現有的系統整合等等等等。以及，你知道，它如何讓使用者更有效率，如果你願意的話，或者更可靠，或者其他什麼的。那才是困難所在。

而且，你知道，這就是為什麼，如果我們回到幾年前，看看 IBM Watson 發生了什麼，好嗎？所以 Watson 本來會是，你知道，IBM 將要推動並透過讓 Watson 學習醫學，然後部署到每一家醫院來產生大量營收的東西。結果基本上是徹底的失敗，被拆分出售了，對吧？而且讓 IBM 付出了很多金錢，包括執行長。而實際情況是，在那些系統可靠、真正能幫助人們，並且不會…傷害勞動力的自然保守主義的情況下，實際部署這些系統，這才是事情變得複雜的地方。我們現在看到的過程，部署系統的困難，並不是新的，它絕對在所有時代都發生過。這也是為什麼，你知道，你的一些聽眾可能太年輕不記得了，但在 1980 年代，80 年代初期，對 AI 有過一波巨大的興趣，圍繞著專家系統。而且，你知道，1980 年代最熱門的工作將會是知識工程師，你的工作將是坐在專家旁邊，然後，你知道，將專家的知識轉化為規則和事實，然後饋送給一個推論引擎，該引擎將能夠推導出新的事實並回答問題等等。一波巨大的興趣。日本政府啟動了一個大型計畫叫做第五代電腦，硬體將被設計來處理這個等等。你知道，基本上大多是失敗的。大概在 90 年代中期，那股興趣浪潮就消退了。而且，你知道，有幾家公司是成功的，但基本上只針對一小部分應用，對於這些應用，你確實可以將人類知識簡化為一堆規則，並且在經濟上是可行的。但是對整個社會和工業的廣泛影響根本不存在。所以這一直是 AI 的危險之處。我的意思是，信號很清楚，你知道，儘管如此，LLMs 加上所有的花俏功能，確實扮演著重要角色，即使只是為了資訊檢索。你知道，大多數公司都希望有某種內部專家，了解所有內部文件，這樣任何員工都可以問任何問題。我們在 Meta 就有一個，叫做 Metamate，它真的很酷，非常有用。


是的，我並不是說 AI 將會…現代 AI 沒有用，或者現代生成式 AI 沒有用，或者…我純粹是在問，已經有大量的資金投入，期望這些東西能有效地達到神級能力。而我們都在談論，這裡可能存在報酬遞減。然後，如果出現你提到的那種時間軸不匹配會發生什麼？嗯，這是關於這個問題的最後一個問題，因為我覺得我們還有很多其他內容要涵蓋。但我覺得時間軸不匹配，對你來說可能是有切身體會的。我和你第一次交談是在九年前，現在想想真是瘋狂。九年前，你知道，關於早期你對 AI 應該如何建構有一個想法，你甚至無法在會議上獲得一席之地。然後最終，當適量的運算能力出現時，那些想法開始奏效，然後整個 AI 領域基於你與 Benjo 和 Hinton 合作研究的想法而起飛。


還有許多其他人。


還有許多其他人。但為了效率起見，我們會說，去查一下。但只是談論那些不匹配的時間軸。當出現過度炒作的時刻，AI 領域，也許就像你剛才談到的專家系統那樣，它們沒有像人們預期的那樣成功，AI 領域就會進入所謂的 AI 寒冬。


嗯，會有一股反彈。

是的，沒錯。所以如果我們將要…如果我們可能正在接近這個時間軸不匹配的時刻，你是否擔心可能會出現另一個寒冬？現在，考慮到投資的數量，考慮到訓練這些東西的主要方式可能存在報酬遞減，也許我們再加上一個事實，即市場…股票市場看起來現在正在經歷一點低迷。這是一個變數，可能是我們正在談論的第三重要的變數，但它必須考慮進去。


所以我…是的，我認為…我的意思是，這裡當然存在時機問題。但我認為，如果我們試圖更深入地挖掘一下。正如我之前說的，如果你認為我們僅僅透過在更多數據上訓練和擴展 LLMs 就能達到人類水平的 AI，那你就錯了。所以如果你是一個投資者，你投資了一家告訴你我們將僅僅透過在更多數據上訓練和一些小技巧就能達到人類水平 AI 和博士水平的公司…我不知道你是否會血本無歸，但那可能不是一個好主意。然而，關於如何前進並擁有能夠做到每個智慧動物和人類都能做到、而當前 AI 系統無法做到的事情的系統，是有想法的。我指的是理解物理世界、擁有持久記憶、以及能夠推理和規劃。這是必須具備的四個特徵。這需要能夠…你知道，能夠獲得常識、能夠從像視訊這樣的自然感測器中學習，而不是僅僅從文本、僅僅從人類產生的數據中學習的系統。這是一個巨大的挑戰。我的意思是，我多年來一直在談論這個，並且說這就是挑戰所在，這是我們必須弄清楚的。

我和我的團隊，或者與我一起工作的人，以及其他聽過我演講的人，正在沿著這條路線取得進展。關於能夠被訓練來理解世界如何運作的系統，例如在視訊上。能夠使用關於物理世界如何運作的心智模型來規劃行動序列以達到特定目標的系統。所以我們有這類系統的早期結果。DeepMind 也有人在研究類似的東西，各個大學也有人在研究這個。所以，問題是，你知道，這什麼時候會從有趣的、展示新架構新能力的研究論文，轉變為大規模的、對許多應用都實用、並且能夠在未經訓練的情況下找到新問題解決方案的架構等等？你知道，這在未來三年內不會發生。但它可能在，你知道，三到五年之間發生，類似這樣。這大致對應於，你知道，我們現在在投資中看到的那種增長速度。現在是否有其他的…所以，這是第一件事。現在，第二件重要的事情是，不會有一個秘密的魔法子彈，由某家公司或某群人發明出來，就能解決這個問題。它將會是許多不同的想法、大量的努力、一些可以作為基礎的原則，有些人可能認同也可能不認同，並且會朝著一個最終證明是死胡同的方向前進。所以不會有這樣一天，在這天之前沒有 AGI（通用人工智慧），而在這天之後我們就有了 AGI。這不會是一個事件。它將是持續的概念性想法，隨著時間的推移，將被做得更大、規模化，並且運作得更好。它不會來自單一實體，它將來自全球整個研究社群。分享他們研究的人將比不分享的人進步更快。所以如果你認為某處有家只有五個人的新創公司發現了 AGI 的秘密，你應該向他們投資 50 億美元，那你犯了一個巨大的錯誤。

你知道，Yan，首先，我一直很享受我們的對話，因為我們開始得到一些真正的答案。我記得甚至從我們上次的對話中，我只是…並且總是回顧那次對話，說，好的，這是 Yan 說的，這是其他人說的，我很確定這是基點。這已經被糾正了。我知道這次我們也會這樣做。現在你為我設定了兩個有趣的線索，我們將在接下來的對話中展開。第一是關於物理和現實世界的理解，第二是開源。所以我們回來之後再談這個。就在這之後。

## AI能否真正理解物理世界？

我們回來了，與 Yan LeCun 在一起。他是 Meta 的首席 AI 科學家，我們很高興能第三次邀請這位圖靈獎得主來到我們的節目。我想和你談談物理學，Yan，因為在 Big Technology Podcast 的歷史上，有那麼一個著名的時刻，我說著名是在我們的聽眾中，我不知道它是否真的擴展到更廣泛的範圍。但你讓我寫信給 ChatGPT，如果我雙手水平拿著一張紙，然後用左手放開那張紙，會發生什麼？我寫了，它令人信服地說，像是它寫道，物理學將會發生，紙張會飄向你的左手。我深信不疑地大聲讀出來，而你說，那東西剛剛產生了幻覺，而你相信了它。事情就是這樣。聽著，已經兩年了。我今天對 ChatGPT 進行了測試。它說，當你用左手放開紙張時，重力會導致紙張的左側下落，而右側仍然被你的右手支撐著，保持在原位。這會產生一個樞軸效應，紙張會圍繞著你右手握住的點旋轉。所以現在它答對了。

它吸取了教訓。你知道，很有可能這個…你知道，某個被 OpenAI 雇來解決這個問題的人，被餵了那個問題，然後被餵了答案，系統就用這個答案進行了微調。我的意思是，你知道，顯然你可以想像無限多個這樣的問題，這就是，你知道，所謂的 LLM 的後訓練（post-training）變得昂貴的地方。就是，你知道，你必須涵蓋多少這類問題，才能讓系統基本上覆蓋人們可能問的所有問題的 90% 或 95% 或其他任何百分比？但是，你知道，這裡有一個長尾效應，你不可能訓練系統回答所有可能的問題，因為基本上有無限多個問題。而且系統無法回答的問題遠遠多於它能回答的問題。你無法在訓練集中涵蓋所有可能的訓練…你知道，問題，對吧？

因為我想我們上次的對話是說，你說因為像鬆手後紙張會發生什麼這樣的動作，在文本中沒有被廣泛涵蓋，模型就不會真正知道如何處理它。因為除非它在文本中被涵蓋過，否則模型不會有那種理解，不會有那種對現實世界的內在理解，對吧？我對此持有一段時間了。

然後我說，你知道嗎，讓我們試著生成一些 AI 影片。我看到 AI 影片中一個有趣的事情是，那裡確實存在一些對物理世界如何運作的理解。以一種方式，在我們九年前的第一次會議上，你說，最難做的事情之一是你問 AI，如果你把一支筆垂直放在桌子上然後鬆手會發生什麼？它會掉下來嗎？這裡有著令人難以置信的排列組合可能發生，AI 很難弄清楚，因為它根本不內在地理解物理學。但現在你去看像 Sora 這樣的東西，你說，給我看一個男人坐在椅子上踢腿的影片，你就能得到那個影片。那個人坐在椅子上，他們踢著腿，腿，你知道，沒有從關節窩裡掉出來或者什麼的，它們在關節處彎曲。

而且他們沒有三條腿。

而且他們沒有三條腿。所以這難道不表明這些大型模型的能力在這裡有所提升嗎？

不。

為什麼？

因為你仍然會看到那些由那些影片生成系統產生的影片，你知道，你打翻了一杯酒，結果酒在空中漂浮，或者飛走了，或者消失了，或者怎麼樣。而且，所以，你知道，當然，對於每一個具體情況，你總是可以收集更多關於該情況的數據，然後訓練你的模型來處理它。

但那並不是真正理解潛在的現實，這只是，你知道，透過越來越大量的數據來彌補理解的不足。你知道，孩子們理解像重力這樣簡單的概念，只需要驚人地少量的數據。事實上，有一個有趣的計算你可以做，我以前公開談論過。如果你拿一個 LLM，典型的 LLM，用大約 30 兆個詞元訓練，類似這樣，對吧？

3 乘以 10 的 13 次方個詞元。一個詞元大約是 3 個位元組。所以那是 0.9 乘以 10 的 14 次方個…位元組。我們說 10 的 14 次方個位元組，把它湊個整數。那些文本，我們任何一個人可能都需要大約 40 萬年才能讀完，對吧？沒問題，每天 12 小時。好的。現在，如果一個四歲的孩子總共清醒了 16000 個小時，你可以乘以 3600 得到秒數，然後你可以估算有多少數據透過視神經進入你的視覺皮層。視神經，每條視神經，我們有兩條，大約每秒傳輸 1 MB，大致上，對吧？

所以是每秒 2 MB，乘以 3600，乘以 16000，這正好大約是 10 的 14 次方個位元組，好嗎？所以在四年裡，一個孩子透過視覺，或者觸覺也一樣，看到的數據量和最大的 LLMs 一樣多。這清楚地告訴你，我們不會僅僅透過文本訓練就達到人類水平。它根本不是一個足夠豐富的資訊來源。順帶一提，16000 小時並不是那麼多的影片，那是 YouTube 上傳內容的 30 分鐘，好嗎？我們現在可以很輕易地得到那個。在九個月大的時候，嬰兒已經看到了，你知道，嗯，比如說 10 的 13 次方個位元組，類似這樣，這又不是很多。而在那段時間裡，嬰兒基本上學會了我們所知道的所有直覺物理學。你知道，動量守恆、重力、動量守恆、物體不會自發消失的事實、即使你把它藏起來它仍然存在的事實。我的意思是，有各種各樣的東西，你知道，非常基本的東西，我們在生命的最初幾個月裡學到的關於世界的知識。這就是我們需要用機器複製的東西。這種學習，你知道，弄清楚世界上什麼是可能的，什麼是不可能的。你採取一個行動會導致什麼結果。這樣你就可以規劃一系列行動來達到特定的目標。這就是世界模型的想法。現在聯繫到關於影片生成系統的問題，處理這個問題的正確方法是訓練越來越好的影片生成系統嗎？我對此的回答是絕對不是。理解世界的問題，其解決方案並非通過在像素層級生成影片來達成，好嗎？我不需要知道，如果我拿起這杯…這杯水，然後把它打翻，我無法完全預測，你知道，水在桌子上會遵循的確切路徑，它會呈現什麼形狀，以及所有那些細節，它會發出什麼聲音。但是，在某個抽象層次上，我可以預測水會灑出來，好嗎？

而且它，你知道，可能會弄濕我的手機和所有東西。所以，在某個…我無法預測所有細節，但我可以在某個抽象層次上進行預測。我認為這確實是一個關鍵概念。

事實上，如果你想要一個系統能夠學會理解世界並了解世界如何運作，它需要能夠學習一個世界的抽象表徵，讓你能夠做出那些預測。這意味著那些架構將不是生成式的，對吧？


我想稍後談談你的解決方案，但我只是想…如果沒有演示，我們之間的對話算什麼呢？所以我想給你看一下，我們做影片的時候會把它放到螢幕上。但這是一個影片，我很自豪。我讓這個傢伙坐在椅子上，雙腿伸出來踢。腿還連在他的身體上。我就想，好吧，這東西真的在進步。然後我說，我能不能弄一個汽車衝進乾草堆的影片？結果是兩個乾草捆，然後一個乾草堆神奇地從一輛靜止的汽車引擎蓋裡冒出來。我對自己說，好吧，Yan 又贏了。

這是輛不錯的車倒是。

是的，我的意思是，問題在於，這些系統已經用大量關於人類的數據進行了微調，因為，你知道，這是人們要求最多的影片，所以…所以有大量關於人類做各種事情的數據來訓練那些…那些系統。這就是為什麼它對人類有效，但對於訓練那個系統的人沒有預料到的情況則不行。

## JEPA：學習世界模型的非生成式方法

你說模型不能是生成式的，才能理解真實世界。你正在研究一種叫做 V-JEPA 的東西，J-E-P-A，對吧？V 是指影片。你也有用於影像的 I-JEPA，對吧？

是的，我們有針對各種東西的 JEPA，文本也有。

還有文本。那麼請解釋一下那將如何解決讓機器能夠抽象地表示真實世界中正在發生的事情的問題。

好的。那麼，造就了 AI 成功，特別是過去幾年自然語言理解和聊天機器人的成功，也在某種程度上造就了電腦視覺成功的，是自我監督學習（self-supervised learning）。那麼什麼是自我監督學習呢？它是，拿一個輸入，無論是影像、影片、一段文本，等等，以某種方式損壞它，然後訓練一個大型神經網路來重建它，基本上是恢復未損壞的版本，或未失真的版本，或採取某個行動後會產生的轉換後版本，好嗎？

而且，你知道，那意味著，例如在文本的背景下，拿一段文本，移除其中一些詞語，然後訓練某個大型神經網路來預測缺失的詞語。拿一張影像，移除其中一些部分，然後訓練大型神經網路來恢復完整的影像。拿一段影片，移除其中一部分，訓練那個網路來預測缺失的部分，好嗎？所以 LLMs 是這種情況的一個特例，在這種情況下，你拿一段文本，然後訓練系統僅僅重現這段文本，你不需要損壞文本，因為系統的設計方式使得，要預測文本中的某個特定詞語或詞元，它只能看到位於它左側的詞元，好嗎？

所以實際上，系統的架構中硬性規定了它不能看現在和未來來預測現在，它只能看過去，好嗎？但基本上，你訓練那個系統只是在它的輸出端重現它的輸入，好嗎？所以這種架構被稱為因果架構（causal architecture），這就是 LLM 的本質，大型語言模型。這就是，你知道，世界上所有的聊天機器人所基於的。拿一段文本，訓練系統只是在其輸出端重現這段文本。並且要預測某個特定的詞語，它只能看位於其左側的詞語。所以現在你有一個系統，給定一段文本，可以預測跟隨該文本的詞語。你可以拿那個被預測的詞語，將它移到輸入端，然後預測第二個詞語，將那個移到輸入端，預測第三個詞語。這叫做自回歸預測（auto-regressive prediction）。

這不是一個新概念，非常古老。所以，你知道，自我監督學習並不訓練系統去完成某個特定的任務，除了捕捉數據的內部結構之外。它不需要任何人類的標註，好嗎？所以把這些應用到影像上。拿一張影像，遮蔽掉它的一塊，比如一些區塊，如果你願意的話，然後訓練一個大型神經網路來重建缺失的部分。

現在使用系統學到的影像內部表徵，作為後續下游任務的輸入，用於，我不知道，影像識別、分割，或者其他什麼。這在某種程度上有效，但不是很好。所以有一個像這樣的大型專案，在 FAIR 做這個，叫做 MAE，遮蔽自動編碼器（Masked Autoencoder）。這是做自動編碼器的一個特例，而自動編碼器本身是，你知道，我從中推導出自我監督學習這個想法的那種通用框架。所以，它效果不是那麼好。而且有各種方法，你知道，如果你把這個應用到影片上，我也研究這個將近 20 年了。

拿一段影片，只展示影片的一部分，然後訓練系統預測影片接下來會發生什麼。所以和文本的想法一樣，但只是針對影片。那效果也不是很好。原因在於，它為什麼對文本有效，而對影片無效呢？例如。答案是，預測跟隨一段文本的詞語很容易。你無法精確預測哪個詞語跟隨某段特定的文本，但你可以產生類似於你字典中所有可能詞語、所有可能詞元的機率分佈的東西，只有大約十萬個可能的詞元。所以你只需要產生一個大向量，包含十萬個不同的數字，這些數字是正數且總和為一，好嗎？

現在，你要做什麼來表示一個影片中所有可能影格，或一張影像中所有可能缺失部分的機率分佈呢？我們不知道如何正確地做到這一點。事實上，在高維連續空間中表示分佈在數學上是難以處理的，好嗎？我們不知道如何以一種有用的方式來做這個，如果你願意的話。

所以，我嘗試了很長時間，想用這種方法處理影片。所以這就是為什麼那些使用生成式模型的自我監督學習想法至今都失敗了。這就是為什麼，你知道，試圖訓練一個影片生成系統作為讓系統理解世界如何運作的方式，這就是為什麼它行不通。那麼替代方案是什麼？

替代方案是某種非生成式架構的東西，我們稱之為 JEPA。那代表聯合嵌入預測架構（Joint Embedding Predictive Architecture）。我們知道這比試圖重建效果好得多。我們多年前就有實驗結果，關於學習影像的良好表徵，我們不是拿一張影像，損壞它，然後試圖重建這張影像，而是我們拿原始的完整影像和損壞後的版本，將它們都通過神經網路，那些神經網路產生這兩張影像的表徵，初始的和損壞的。然後我們訓練另一個神經網路，一個預測器，從損壞版本的表徵來預測完整影像的表徵，好嗎？如果你成功地訓練了這種類型的系統，這不是被訓練來重建任何東西的，它只是被訓練來學習一種表徵，以便你可以在表徵層內進行預測。你必須確保表徵包含盡可能多的關於輸入的資訊，這實際上是困難之處，這是訓練這些系統的困難部分。所以這叫做 JEPA，聯合嵌入預測架構。為了訓練一個系統學習影像的良好表徵，這些聯合嵌入架構比那些生成式的、透過重建來訓練的架構效果好得多。現在我們也有一個適用於影片的版本。所以我們拿一段影片，透過遮蔽掉它的一大塊來損壞它，我們將完整的影片和損壞後的影片通過相同的編碼器（encoders），然後同時，我們訓練一個預測器，從部分影片的表徵來預測完整影片的表徵。當你把系統學到的影片表徵餵給一個試圖告訴你，例如，影片中正在發生什麼動作，或者影片是否可能或不可能，或者類似事情的系統時，它實際上運作得相當好。

那很酷。所以它提供了抽象思維。

是的，在某種程度上，對吧？而且我們有實驗結果表明，這種聯合嵌入訓練，我們有好幾種方法可以做到這一點。有一種叫做 DINO，另一種叫做 VICReg，另一種叫做 iBOT，還有一種叫做 IA…但那是一種蒸餾方法。所以我們，你知道，有好幾種不同的方法來處理這個，但其中一種將會導向一個配方，基本上給我們一個訓練那些 JEPA 架構的通用方法，好嗎？所以它不是生成式的，因為系統不是試圖重新生成輸入的部分，它試圖生成輸入的表徵，一個抽象的表徵。這讓它能夠做的是忽略所有關於那些真正不可預測的細節，就像你垂直放在桌上的那支筆，當你放手時，你無法預測它會朝哪個方向倒下，但在某個抽象層次上，你可以說筆會倒下，對吧？而不去表示方向。所以，這就是 JEPA 的想法。我們開始有，你知道，關於讓系統…所以 V-JEPA 系統，例如，是在大量自然影片上訓練的。然後你可以給它看一個不可能的影片，比如一個物體消失或改變形狀的影片，好嗎？你可以用遊戲引擎或類似的東西生成這個。或者一個情況，你有一顆球在滾動，它滾到一個屏幕後面，然後屏幕降下來，球不見了，對吧？好嗎？所以像這樣的事情。你測量系統的預測誤差。系統被訓練來預測，對吧？而且不一定是在時間上，而是基本上預測，你知道，影片的連貫性。所以你測量預測誤差，當你向系統展示影片時。當不可能的事情發生時，預測誤差會飆升。所以你可以檢測系統是否整合了某種關於，你知道，物理上什麼是可能的，或什麼是不可能的概念，僅僅透過用物理上可能的自然影片進行訓練。所以那真的很有趣。那是有點像系統獲得某種常識的第一個跡象。

是的。我們也有這些系統的版本，是所謂的動作條件式（action-conditioned）。基本上我們有這樣的情況，我們有一段影片或一張影像，關於世界在時間 t 的狀態，然後一個動作被執行，比如，一個機器手臂被移動，或者其他什麼。然後當然我們可以觀察到這個動作產生的結果。所以現在，當我們用這個訓練一個 JEPA 時，模型基本上可以說，這是世界在時間 t 的狀態，這是你可能採取的一個動作，我可以預測世界在時間 t+1 在這個抽象表徵空間中的狀態。

這是對世界如何運作的學習。

對世界如何運作的學習。而這件酷的事情是，現在你可以想像，你可以讓系統想像一系列動作的結果會是什麼。如果你給它一個目標，說，我希望世界在最後看起來是這樣，你能找出一個行動序列來達到那個點嗎？它實際上可以透過搜索一個行動序列來找出那個能產生那個結果的方案。那是規劃（planning）。那是推理（reasoning）。那是真正的推理和真正的規劃。

## 開源模型與封閉模型之爭

好的，我得讓你走了，我們已經超時了，但你能給我大概 60 秒你的反應嗎？

關於 DeepSeek，以及開源模型在某種程度上是否已經超越了專有模型？我們得限制在 60 秒內，否則你的團隊會殺了我的。

所以，「超越」是一個很強烈的詞。我認為，開源世界的進展更快，那是肯定的。但當然，你知道，專有商店也從開源世界的進展中獲利，對吧？他們和其他人一樣可以獲取那些資訊。所以很清楚的是，開源世界湧現出更多有趣的點子，任何單一的商店，無論多大，都無法想出那麼多。你知道，沒有人壟斷好點子。所以開源世界的魔法效率在於，它從世界各地招募人才。所以我們從 DeepSeek 看到的是，如果你建立一個小團隊，給予相對較長的自由度和較少的限制，讓他們僅僅去開發下一代 LLMs，他們實際上可以想出其他人沒有想到的新點子，對吧？他們可以稍微重新發明一下，你知道，你做事的方式。然後如果他們與世界其他地方分享，那麼整個世界都會進步，好嗎？所以，這清楚地表明，你知道，開源進展更快。而且，你知道，開源世界可以發生更多的創新，這是專有世界可能難以趕上的。運行成本更低。我們看到的是，對於，你知道，我們交流的合作夥伴，他們說，嗯，我們的客戶在原型設計時可能會使用專有的 API，但到了實際部署產品的時候，他們實際上會使用 Llama 或其他開源引擎，因為它更便宜，而且更安全，你知道，它更可控。你可以在本地運行它，你知道，有各種各樣的優勢。所以，我們也看到一些人最初擔心開源努力會，我不知道，例如，幫助中國人或類似的事情，如果你有一些地緣政治的原因認為這是個壞主意，他們的想法發生了很大的轉變。但 DeepSeek 已經表明，中國人不需要我們。我的意思是，他們可以想出非常好的點子，對吧？我的意思是，我們都知道中國有非常非常優秀的科學家。還有一件不為人知的事情是，所有科學領域中被引用次數最多的單篇論文，是一篇關於深度學習的論文，來自 10 年前，2015 年。它來自北京。

哦，好的。

是的，那篇論文叫做 ResNet。所以它是一種特殊類型的神經網路架構，基本上，在一個深度學習系統中，預設情況下每個階段都會混淆恆等函數，它只是將其輸入複製到其輸出。而神經網路所做的是計算與這個恆等的偏差，好嗎？所以這允許訓練極深的神經網路，包含幾十層，也許 100 層。它是…那篇論文的第一作者是一位叫做 Kaiming He 的先生，當時他在北京微軟亞洲研究院工作。那篇論文發表後不久，他加入了加州的 FAIR。所以我雇用了他。在 FAIR 工作了大約 8 年，最近離開了，現在是 MIT 的教授，好嗎？所以，世界各地都有非常非常優秀的科學家。沒有人壟斷好點子，矽谷當然沒有壟斷好點子。或者另一個例子是，實際上第一個 Llama 來自巴黎。它來自巴黎的 FAIR 實驗室，一個只有 12 人的小團隊。所以，你必須利用全世界想法、背景、創意的多樣性，如果你希望科學和技術快速進步的話。而這是由開源促成的。


## 結語

Yan，和你交談總是很高興。感謝這是我們第…我想是第四次還是第五次交談了，再次回到 9 年前。你總是幫助我看穿所有的炒作和喧囂，真正弄清楚正在發生什麼。我相信對我們的聽眾和觀眾來說也是如此。所以 Yan，非常感謝你來上節目。希望我們很快能再做一次。

謝謝你。

好的，各位，感謝觀看。我們週五會回來分析本週的新聞。在那之前，我們下次在 Big Technology Podcast 再見。