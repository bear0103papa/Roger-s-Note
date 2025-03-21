---
layout: post
title: "為什麼優秀的 AI 產品都與數據有關 | Shaun Clowes (Confluent 首席產品官) 訪談"
date: 2025-01-02
categories: [
    # 人名相關
    Shaun Clowes,        # 主要受訪者
    Tom Kennedy,         # 文中提到的 Atlassian 總法律顧問
    Lenny Rachitsky,     # 訪談者
    Elena Verna,        # 文中提到的播客嘉賓
    Charlie Munger,     # 文中引用其名言
    
    # 公司相關
    Confluent,          # 受訪者現任公司
    Salesforce,         # 受訪者前公司
    Atlassian,         # 受訪者前公司
    MuleSoft,          # 受訪者前公司
    Metromile,         # 受訪者前公司
    Workday,           # 文中提到的案例
    Jira,              # 文中提到的產品
    
    # 產業別
    AI,                # 人工智能
    Product Management, # 產品管理
    B2B SaaS,          # 企業軟體服務
    Enterprise Software, # 企業軟體
    PLG,               # 產品主導增長
    
    # 年份
    "2012",              # 文中提到 Atlassian 開始 B2B 增長團隊的時間
    "2024"               # 當前年份
]
description: "這篇文章是對 Confluent 首席產品官 Shaun Clowes 的深度訪談，主要探討了 AI 與數據的關係、B2B SaaS 產品的發展趨勢，以及產品主導增長(PLG)的重要性。Shaun 分享了他在 Atlassian、Salesforce、Metromile 等公司的經驗，強調了數據在產品決策中的關鍵作用，以及如何平衡數據驅動與直覺判斷。他特別指出，在 AI 時代，擁有正確的數據和理解數據的能力將成為產品成功的關鍵因素。"

---

<span class="original-link">原文連結： [為什麼優秀的 AI 產品都與數據有關 | Shaun Clowes (Confluent 首席產品官) 訪談](https://www.lennysnewsletter.com/p/why-great-ai-products-are-all-about-the-data-shaun-clowes)</span>

Lenny Rachitsky：

我很喜歡你對這個話題有很強烈的看法，就是關於產品經理這個職業的現狀，以及大多數產品經理表現並不出色這件事。

Shaun Clowes：

為什麼產品管理仍然是一個相對不成熟的領域？我們已經走過了15到20年，但現在的產品管理似乎還是沒有抓住真正重要的事情，真正能創造價值的事情。如果我們是醫生，你會說："這完全不能接受。"

Lenny Rachitsky：

那答案是什麼，Shaun？我們該如何解決這個問題？

Shaun Clowes：

在任何事情上都要從客戶的角度、市場的角度、競爭對手的角度來思考，但只有很少數的產品經理能做到這點。他們往往陷入內部政治，陷入敏捷管理或敏捷執行或產品交付中，這樣是不可能成功的。

Lenny Rachitsky：

你有一個觀點認為 AI 對產品管理最大的影響是在數據管理方面。

Shaun Clowes：

是的，你有這個合成機器，也就是 LLM，它可以幫助你做合成，但如果它沒有所有這些數據來做合成，它就什麼都做不了。這意味著 LLM 的好壞取決於它們獲得的數據以及這些數據的時效性。

Lenny Rachitsky：

未來如果可以輕易克隆像 Salesforce 或 Atlassian 這樣的 B2B SaaS 應用，這些企業長期會怎麼樣？它們是不是都會遇到麻煩？

Shaun Clowes：

人們真的低估了這些應用程序中價值創造的來源，他們完全理解錯了。

Shaun Clowes：

如果你想不客氣地說，你可以看看這些應用程序並說："它們都只是基於數據庫的表單。"你可以說 Jira 是基於數據庫的表單，Workday 是基於數據庫的表單，Salesforce 也是。它們都是基於數據庫的表單，所有的垂直 SaaS 或商業 SaaS 最終都是基於數據庫的表單。你可能會想："這有多難複製？"答案是：難度驚人。

真正的價值在於業務規則。這就是造成用戶黏性的原因。為什麼你要購買 Workday？你購買 Workday 不是為了它開箱即用的配置。你購買 Workday 是因為你想把它配置成符合你公司的人力資源流程。它變成了你公司專屬的 Workday。它不是其他公司的 Workday，而是你公司的 Workday。

實際上，你使用這個軟件的時間越長，它就越成為那樣 - 越來越不像 Workday，越來越像你特定的公司。這是有道理的，因為它本來就是為了能夠配置以滿足任何特定公司的需求而建立的，而每個公司都是獨特的。

隨著這種情況發生，這些配置部分，使應用程序適合你的組織的部分，使它不適合其他任何組織，同時也使它變成一個黑盒，以至於你甚至不再理解它是如何運作的。

例如，如果你去 Salesforce 問他們："你能定義在 Salesforce 內部銷售軟件的所有流程嗎？"如果不閱讀他們 Salesforce 實例的代碼，他們是無法告訴你的。這不是什麼專有秘密。這顯然是真的，因為隨著時間的推移，這就是銷售發生的方式。

除了通過他們的內部工具，沒有其他方式可以完成銷售。這意味著重要的不是用戶界面，也不是數據模型，儘管這兩者都很有用。重要的是產品底層工作流程多年來的演變，以支持客戶，同時客戶也在調整這些工作流程使其符合他們的運作方式。

那麼這對 AI 公司有什麼影響？你可以說："現在建立基於數據庫的表單應用程序比以往任何時候都容易。"所以我想說："好吧，這可能會導致每個新應用的增量價值趨近於零。"這可能會讓現有的記錄系統獲得更多優勢，因為會有無數的競爭者都只是更多的基於數據庫的表單。那麼你該如何在它們之間做出選擇呢？

你不妨就選擇市場領導者。沒有人會因為購買 Salesforce 而被解雇。這是一個方面。

你也可以從另一個角度來看，我聽到一些人提出這個論點，我認為很有趣：最終，代理人將取代大部分用戶界面的使用。例如，假設你使用 Salesforce 的 Service Cloud，我聽人說："很多服務代理可能最終會被代理工作流程取代。這意味著不會有人操作用戶界面。如果用戶界面甚至不存在了，那你為什麼還需要 Salesforce？我們不妨就直接使用原始數據庫表，誰還需要基於數據庫的表單呢？"

但這也說不通，因為代理必須按照系統的規則運作，而規則是由業務流程定義的。想像一下沒有前端的 Salesforce。假設 Salesforce 沒有用戶界面，它仍然會有我剛才談到的那些業務規則。這些業務規則定義了代理應該做什麼，它們幾乎是在告訴代理應該做什麼以及世界如何運作，什麼是可能的，什麼是允許的。

所以從我的角度來看，認為這會完全摧毀這類業務流程 SaaS 應用程序的差異化優勢，這似乎只是一個幻想，一個瘋狂的幻想。

我唯一能相信的情況是，如果你說："好吧，可能會有一個新創公司，它能夠分析配置在 Salesforce 中的所有規則，試圖反向工程你實際的業務流程，然後在此基礎上運作。"但最適合做這件事的應該是 Salesforce 本身，或者在 Atlassian 的情況下是 Atlassian，在 Workday 的情況下是 Workday。

我認為可能會發生兩種情況之一。要麼所有這些向 AI 轉移會使這些應用程序變得更好，更難以撼動，基本上變得更強大。要麼它可能會催生一些新層次的應用程序，這些應用程序來自更多基於平台的東西，而不是像人力資本管理或 ERP 或工程這樣的特定領域。

你可以想像一個世界，在這個世界中出現了一種全新的、更多基於平台的 SaaS 應用程序的演變，它們可以處理多個業務功能的業務規則和企業中事物移動的方式，但這種東西今天還不存在。

所以你可以說這可能會存在，而且由於 AI 的原因可能會比我們想像的要好得多。或者你可以說富者會越來越富。最可能的結果是，目前主導市場的公司會變得更具主導地位，但我不認為這種想法 - 即它會導致大量新應用程序的出現，這些應用程序會更容易挑戰現有企業 - 對我來說並不特別直觀。

Lenny Rachitsky：

哇，這真是非常有趣，這裡有很多內容可以討論。我原本以為你會朝這個方向發展：如果現在建立產品變得容易了，那麼分銷優勢就變得更加重要。比如今天，我可以坐在那裡雇一個團隊克隆 Salesforce，可能需要一段時間，但當我完成時，他們已經進化了，他們在增加功能，他們走在前面，對吧？你是在追逐過去的目標。如果是這樣的話，獲得成功的方法之一就是要有某種分銷優勢。有一個 Salesforce 產品克隆是一回事，讓人們知道它、採用它、銷售它、採購它又是另一回事。你覺得在這個世界裡，分銷優勢是否變得更有價值？

Shaun Clowes：

是的，這確實有道理。歸根結底，分銷始終是一個優勢，因為最困難的問題是要進入任何特定問題的考慮範圍。世界充滿了問題，但當人們遇到問題時，首先他們不認為他們會去解決它，當他們確實想要解決時，他們也不會想到你。所以分銷始終是一個令人難以置信的優勢。

但是在 AI 的世界裡，分銷似乎更可能變得困難而不是容易。例如，由於冷郵件變得越來越容易發送，即使是更糟糕的垃圾郵件，聽起來也更好，但這實際上導致每個人都對一切變得麻木。我不知道你是否注意到，現在一半的 LinkedIn 內容基本上都是明顯由 LLM 生成的垃圾信息。

在某種程度上，它實際上正在惡化信噪比。所以我認為很多創業公司經常使用的突破性分銷機制似乎普遍變得更擁擠，成本更高。這對於"我是不如 Salesforce 好的產品"、"我是不如 Salesforce 好但更便宜的產品"來說並不是好兆頭。

必須要有一些不同之處。必須要有某個方面你明顯更好。我所看到的，也是我一直在觀察的，我認為很有趣的是，很多現代下一代應用程序將數據作為工作流程中的一等公民。我認為這很有說服力。

如果你看看下一代的申請人管理產品，那些處理入職求職者的產品，現在很多最新的核心產品都包含了你的招聘時間數據，包含了誰有最好的招聘結果，誰在一段時間內有最差的離職率，一直追溯到面試官和面試在面試週期中的位置。

所以基本上將數據嵌入到整個生命週期中。我認為這些是創業公司可以通過帶來不同的方法來實現體驗優勢的方式，這確實使他們能夠利用傳統的顛覆性創新。歸根結底，這就是顛覆性創新。

這意味著大多數公司已經超出了平均效用，所以你可以通過達到平均效用並保持不同來取勝。達到標準並保持不同是突破的方式。所以這是一個不錯的策略。

但即使對這些公司來說，現在他們也將面臨所有這些 AI 競爭對手，這些競爭對手正在使用 AI 來更快地開發，盡可能快地建立一個和他們一樣的競爭對手並開始擠入市場。看看這一切如何發展將會很有趣。

它具有某種競爭到底的特徵。你可能是對的，在軟件領域，特別是在剛開始時，分銷仍然是最困難的部分。

Lenny Rachitsky：

所以如果你有某種聰明且公平的優勢，這似乎會變得更加強大。比如說你有一個平台或受眾基礎之類的。你提到了這個你很喜歡的 ATS 產品。你想給哪個產品一些讚美，還是你想保持匿名？

Shaun Clowes：

是的，是 Ashby。這是現在所有潮人都在談論的產品。有趣的是，人們實際上是在與所有產品進行比較，甚至是與上一代現代 SaaS ATS 相比，他們都用讚賞的語氣談論它，因為它們將數據放在實際的工作流程中。所以行動及其結果可以直接在你工作的應用程序中聯繫起來。我認為這是一個非常吸引人的用戶體驗。

Lenny Rachitsky：

在我轉向不同方向之前，讓我們總結一下這個話題。你提到數據有多麼重要，以及它如何成為未來成功和差異化的核心，特別是在 AI 工具和產品方面。你對想要這樣做的人有什麼建議嗎？是確保你有專有數據嗎？是把它作為首要任務嗎？你會給試圖這樣做的創始人什麼建議？

Shaun Clowes：

是的，我認為歸根結底，這些都是必要的，不是嗎？如果你有第一手數據但無法利用它，那就沒什麼用。如果你有第三方數據並以有趣的方式利用它，數據的問題是我們都被數據包圍著。所以數據無處不在。真正重要的是在正確的時間、正確的地點有正確的數據，因為我們都是人類。

對我來說，顯然存在數據優勢，如果你能夠擁有非常有價值的第一手數據，甚至可能存在數據網絡效應。但無論如何，關鍵仍然是能夠在正確的時間、正確的地點為用戶提供正確的數據，讓他們能夠從中獲益。

說到這個話題，我想補充一點：我知道在我的職業生涯中，很奇怪的是，雖然我一直是一個產品人，但我經常接手管理數據團隊。所以我實際上在很多不同的公司運營過數據團隊，這很奇怪，因為產品經理通常不會管理數據團隊。我想我對數據有著極大的親和力。我過去常常稱自己是數據驅動的，這是我的特色。現在回想起來，我認為數據恰恰相反。

數據更像是一個指南針而不是 GPS。如果你把數據看作是給你答案的方式，你總是會錯。你要麼是錯的，要麼是慢的，有時兩者都是，因為大多數情況下數據並不能給你答案。它只是告訴你你剛說的是否荒謬或者是否有潛在的可能性。所以它更像是用來否定你的想法。

如果你試圖用數據來做所有事情，你最終會變得很慢，因為你的大腦最終只是一個數據篩選器。你的直覺之所以告訴你某些事情，是因為你已經看到了大量的數據表明這是最可能的答案。所以數據驅動，對數據的癡迷是很容易過度的，非常非常容易過度。

所以關鍵是要適度使用數據，在手邊有正確的數據，對數據有正確的認識，而不是試圖期望數據給你答案，或試圖用數據作為武器，或試圖用數據來強迫人們相信你或朝你的方向走。但數據確實是一切的中心，關於如何影響和在你正在建立的產品中取得成功，以及你在內部提出的論點等等。

Lenny Rachitsky：

我很喜歡你談到這一點。我確實想在這裡花些時間。有趣的是你說你過去是數據驅動的。你在 Reforge 創建了數據課程，面向產品經理的數據課程和留存、參與度課程。順便說一下，我們會提供這些課程的鏈接。你仍在幫助這些課程。順便說一下，這些課程仍在運行。它們很棒，人們都很喜歡。

Shaun Clowes：

是的。

Lenny Rachitsky：

太好了，我們會為人們指出這些資源。我喜歡你之前對我描述的方式，這是你對數據驅動型產品經理的改革。很多人都這麼說，他們說："不要只是按照數據告訴你的去做。要運用你的直覺，把它作為指導。"

在實際操作中執行這個建議很困難。比如說對你的產品經理和團隊來說，當他們有數據告訴他們："嘿，這個實驗是一個巨大的成功，或者這裡有一個巨大的入職轉化機會。"你對這些人有什麼實際的建議？

Shaun Clowes：

我總是鼓勵人們做的第一件事是看一段數據。如果你在看一段數據，結果告訴你一些你的直覺認為極其錯誤的事情，那麼它們可能確實是錯的。首先，相信你的直覺，去證明你是對的。

不要只是一眼就接受它，因為大多數時候就像奧卡姆剃刀原理一樣。對於一些極其不直觀的事情，最可能的解釋就是它就是錯的，某個地方出了問題。當然，偶爾你可能確實是對的。這些將是值得的時刻。

這些是讓一切都值得的時刻。有時候你確實會發現負面目標，你盯著它看，想："就是這個。這就是我們一直在尋找的問題。這就是我們一直在尋找的東西。"

但你必須非常認真地追查到底，真正理解你在看什麼。這些數據具有代表性嗎？這些數據是我們關心的受眾的良好樣本嗎？它是否已經受到某種選擇偏差的影響？

很多時候，當我看到來自不同產品負責人甚至數據團隊的分析時，你可以在其中找到很大的漏洞，字面意思是可以開卡車穿過去的漏洞。如果你用權威的態度展示數據，而這些數據是荒謬的，或者分析充滿漏洞，你不僅得不到好處，還會失去很多信任分。

與其提供一個愚蠢的分析，不如乾脆不要提供分析。我看到人們在這方面經常自我毀滅，因為他們只是帶著一把刀參加槍戰，他們帶來的分析根本站不住腳，然後在現場被打倒，這不是任何人想要的結果。

所以如果我給你一些額外的戰術建議，那就是：好的，如果我在看一段數據，這段數據之前發生了什麼，那看起來正常嗎？所以這件事發生了，或者無論什麼你非常興奮的事情，在那之前發生了什麼？那是否符合你認為應該是對的？然後，好的，對於你正在看的那件事，之後發生了什麼？

如果你對之前和之後發生的事情有了解，這就能讓你知道這件事是否值得討論。然後再往上看一層，超越你正在看的這些數據。比如說，我在看入職成功率。

假設我在看入職到第二週留存率之類的指標。我說："我發現了這個完全成功的干預措施。這個干預措施效果很好。"如果你往上游看，發現這個干預措施只適用於2%的入職流量，那就毫無意義了。這很可能只是一個隨機的異常。

即使它不是隨機異常，它也不是一個有用的工具。所以你必須往上看，然後你可能往下游看，可能會發現，是的，他們在第二週還在，但在第三週他們都流失了。他們基本上是毫無意義的。我們為什麼還要討論這個？

或者你可能會退一步看，說："好的，是的，這些人確實保持更長時間，但他們的平均銷售價格更小。"因為我們真正關心的是，我們確實關心參與度，我們關心更多的客戶，但我們想要保持高ASP的客戶以達到特定的收入目標。

最終目標是讓客戶開心地付錢給我們。所以這就是我所說的往上看一層的意思。

如果你往左看一層，往右看一層，也就是之前和之後，然後往上看一層，你仍然看到那個告訴你你想講的故事的東西，那麼現在你就有了一些非常有說服力的東西，因為人們想聽到這個。他們想聽到，"好的，之前發生了什麼？之後發生了什麼？為什麼會有這樣的結果？"但你必須真正做好功課，真正嚴謹地對待它，以避免追逐虛幻的黃金。

Lenny Rachitsky：

我喜歡這個建議。順便問一下，ASP是什麼意思？

Shaun Clowes：

哦，平均銷售價格(average sale price)，或者MRR或其他收入指標。

Lenny Rachitsky：

明白了。

你提到的這一點，關於很多時候實驗顯示正面結果，但最終卻什麼都不是，這讓我想起來 Shopify 的增長主管在我的播客上說過，他們會保留年度隊列的對照組，然後系統會在一兩年後自動發郵件給他們說："嘿，檢查一下這些隊列，看看這個還是更高嗎。"

結果發現40%的情況下，長期來看這些實驗最終變成了中性結果。

Shaun Clowes：

有趣。這很有趣，因為上次我們做類似的事情時，我們有一個全局對照組，這個組實際上被排除在所有實驗之外。實驗平台根本無法針對那個組。所以10%的人永遠不會看到任何改變。

這非常有幫助，因為你總是可以將他們與同一批次隊列的任何體驗進行比較。我同意你的觀點。但另一方面，我並不是很喜歡這種思維過程。比如說，假設一個實驗確實顯示了暫時的好處。

如果一個實驗顯示了暫時的好處，但這個好處並不能永遠持續，這是否意味著這個暫時的好處從來就不值得？或者這只是意味著暫時的好處是達到另一個層次的機會，你只是沒有利用好？我想說的是，這裡沒有完美的答案。

我不認為好處不能永遠持續就意味著你失敗了。但我同意你的觀點，不試圖理解淨收益是什麼，淨提升是什麼也很重要。這就是為什麼增長如此困難。增長作為產品的一部分特別困難。

Lenny Rachitsky：

營銷人員，我知道你們喜歡 TLDR(太長不讀版本)，所以讓我直接說重點。Wix Studio 在一個地方為你提供了一切所需，可以服務於任何規模的客戶。以下是你的工作流程可能的樣子。

輕鬆地通過動態頁面和可重用資產擴展內容，通過內置的營銷整合(如 Meta、CPI、Zapier、Google Ads 等)快速推進項目，用直觀的設計工具在幾天而不是幾週內進行著陸頁 A/B 測試，連接 Google Analytics 和 Semrush 等跟踪和分析工具可以捕捉關鍵業務事件，無需手動設置，從統一的儀表板管理所有客戶的社交媒體和通信，然後在所有渠道創建、安排和發布內容。

如果你在處理內容豐富的網站，Wix Studio 的無代碼 CMS 讓你可以在不觸及設計的情況下進行構建和管理。當你準備好更多功能時，Wix Studio 會與你一起成長，添加你自己的代碼，使用 Wix 製作的 API 創建自定義集成，或利用強大的原生業務解決方案。使用 Wix Studio 推動真正的客戶增長。訪問 wixstudio.com。

所以你在 Atlassian 建立了第一個 B2B 增長團隊，對嗎？

Shaun Clowes：

是的。是的，這讓我感覺像個老人，但是的，那是很久以前的事了。

Lenny Rachitsky：

或者也許這是一個新事物。

Shaun Clowes：

是的。

Lenny Rachitsky：

要麼是很久以前的事，要麼就是我們最近才發現在 B2B 中可以這樣做 - 專注於增長。

Shaun Clowes：

是的，那是在2012年左右，那時候增長黑客是一個流行詞。人們現在不太使用這個詞了，但在 B2C 領域它是一個很大的事情，因為人們可以看到 Facebook 做他們的"7天內10個朋友"這樣的事情，他們可以看到這種對人們有效的東西。

他們說："天哪，這太神奇了。"在 Atlassian，我們開始探索："好吧，這些技術在 B2B 中是否有效？"現在看來很明顯，很多都是有效的，而且值得做。

但在當時這並不那麼明顯，因為對很多 B2B 公司來說，我的意思是，你之前總結過，Lenny，分銷可以掩蓋所有缺陷。幾乎所有的問題都可以通過真正好的分銷來解決。

如果你有很好的營銷，很好的地面工作，你在某種程度上把你的產品推入渠道，你把你的產品放在人們面前，你用客戶成功人員、服務和諮詢等來掩蓋醜陋的部分，人們會購買幾乎任何軟件，或者你肯定可以用很多不同的軟件取得成功。

但在2012年，還不清楚如果你用不同的方式來做這件事，你聽說過自己銷售的軟件，這是否值得付出努力？現在我會說，這顯然是值得付出努力的，以至於很多人一直在思考這個問題，但在那個時候這是一個有趣的時期。

Lenny Rachitsky：

這基本上就是產品主導增長(PLG)的開端。這樣理解對嗎？

Shaun Clowes：

基本上現在叫做 PLG，但是的，在那時我們甚至不知道該怎麼稱呼它。

Lenny Rachitsky：

就叫增長。基於那個經驗，現在很多 B2B 公司都有增長團隊並投資增長，什麼造就了 B2B 中優秀的增長團隊？你經常發現人們陷入哪些陷阱，你認為他們應該試圖避免？

Shaun Clowes：

歸根結底，這些類型的努力都是一個平衡的問題。我的意思是，增長團隊往往會經歷一系列階段。他們的第一個階段是證明他們的價值。我們可以稱之為淘金階段。這件事可能根本不值得做。

為什麼我們要做這個，一群人在那裡試圖證明某個地方存在增長效應？所以這是證明階段。這個階段的好處是生活很好，因為通常有很多增長可以找到，因為以前沒有人去尋找過，所以生活很好。

但這是相當隨機的，因為你只是在隨機搜索階段字面上搜索，"我們試過 X 了嗎？我們試過 Y 了嗎？我們試過 Z 了嗎？"然後一旦你讓這個模式運轉起來，就開始要考慮"好的，我們如何擴大這個規模？這只是曇花一現嗎？

我們只是找到了一些低垂的果實然後就沒有其他東西了嗎？這只是我們應該做的一個項目而不是一個持續的事情嗎？"所以你必須把它變成一個系統。你必須證明它可以被重複，然後你必須擴大它的規模。

它必須成為一個事物。它必須成為你 DNA 的一部分。你必須用 PLG 的視角來看待你做的每一件事，從付費獲客到激活、留存、參與度、跨產品擴展、追加銷售，我的意思是，你能想到的所有通過收入或參與度來增長產品的不同方式。

有很多不同的方式可以做到這一點。所以你最終必須擴大規模並能夠做所有這些不同的事情。然後你必須弄清楚如何與組織的其他部分配合，因為有其他人整天都在構建產品。

有其他人整天都在銷售那個產品。有其他人整天都在營銷那個產品。所以增長組織處在一個有趣的空間，他們在每個人之間。

他們有點在每個人的沙盒裡，在一定程度上，他們在每個人的全職工作的邊緣，他們非常有價值，但因為所有這些關係，以及他們如何與組織的所有其他部分配合，這可能會變得複雜。

所以許多組織失敗是因為他們真的找不到多少勝利，或者當他們確實找到勝利時，它看起來完全隨機。或者他們確實找到了很多勝利，但他們都無法理解它們，因為它們看起來就像是在一堆潛在機會中的隨機漫步。

當你經歷從嘗試想法到成功，再到擴大規模，再到運營化的增長階段時，有很多不同的失敗方式。

Lenny Rachitsky：

這方面最大的一個迷思是很多公司聲稱 PLG 很少真正有效。你要麼嘗試了它但它就是不起作用，要麼它最終就是消失了。

對於你的產品是否有機會通過產品主導增長成功，相對於直接轉向銷售而根本不用擔心這個，你有什麼看法嗎？

Shaun Clowes：

首先讓我們檢視一下反事實。所以讓我們從你問題的反面開始，說："嘿，如果我們都放棄 PLG 會怎樣？"我們就說："嘿，在 B2B SaaS 中做這個沒有意義。"

問題是沒有一種自然力量能推動公司在早期就考慮終端用戶的享受和成功。沒有自然的力量，沒有自然的聯繫力量。為什麼？我的意思是，101，買家是最重要的人。經濟決策者是最重要的人。

他們的需求是第一位的。他們通常是推動 RFP 的人。他們通常是與銷售組織打交道的人。所以你聽到的需求通常都是功能驅動的，而不是來自終端用戶。

所以如果你不考慮那個終端用戶，你就是在埋下自己滅亡的種子。但說你應該考慮終端用戶是一回事，有一個系統來做這件事是另一回事，因為人們對各種事情都只是口頭上說說。

但我相信你以前聽過這個，在經濟學中，人們只做他們的激勵機制告訴他們要做的事。從廣義上講，這就是他們做的，這就是發生的事情。你得到的是你設定要衡量的東西。你得到的是你給人們激勵去做的事情。

如果組織中沒有人真正的激勵是衡量他們的終端用戶成功、他們的享受、他們的幸福感、他們的留存率、他們的參與度，特別是在早期，這就不會發生。或者充其量它只會是一個業餘愛好。

所以然後通過延伸，如果我從那裡開始，然後我說："好的，讓我們說它不存在，PLG 不存在，因此它是一個業餘愛好，因此會有一群業餘愛好者關心這個。"

然後你問自己："好的，這是否意味著會有很多產品的這些體驗真的很糟糕？這是否意味著這將成為這些產品的競爭對手做得更好的機會？這是否是一個差異化的競爭優勢？"是的，我會說是的。

所以我只是倒推回去說："好的，你可以說你的 PLG 投資可能太高了。"你可能會說："好吧，如果我投資更多，我不會得到更多的回報。我不能把一生都花在實驗入職流程上。這不是唯一重要的事情。"

這是非常非常正確的，但很難爭辯說它應該降到零。所以對我來說，因此這是關於平衡。這是關於："好的，PLG 如何與我發展業務的其他不同方式配合？"比如在 Confluent，我們有一個 PLG 功能。我們確實通過自助註冊增長。

人們註冊，字面意思是他們的信用卡，很多人註冊並且非常成功，從不與我們交談。我們也有一個企業銷售團隊，直接向非常大的公司銷售，一些世界上最大的銀行，你一定知道的那些人。

我不認為它必須是二選一。我認為這是關於平衡。這是關於讓動作發揮作用，對於真正複雜的公司，那些真正掌握這一點的人，是關於讓兩種動作一起工作。

如果你能讓 PLG 動作為你的銷售團隊提供支持，當銷售線索還沒準備好時，讓銷售團隊動作為你的 PLG 漏斗提供支持，如果你能讓這些動作相互配合，你可以賺很多錢。

這可能是一個建立非常有韌性業務的極其成功的方式。為什麼？因為你獲得了很多客戶和很多收入。如果你有很多收入但客戶數量很少，你就不能那麼成功，因為你被綁住了，每個人都知道這一點。

如果你有很多客戶但沒有足夠的收入，你也不能那麼成功，因為你應該沒有足夠的錢來維持運營。所以魔力在於同時擁有這兩者，擁有非常多的客戶和非常多的收入，這樣的公司很難被打倒。

如果我回顧我在 Atlassian 的時光，我想他們分享了他們最新的數字，我記不清具體是什麼了，但它在公開數據中，大約8萬或10萬客戶，差不多是這樣。那是很多客戶。那是很多客戶。

假設你要與 Jira 競爭，你說："是的，我要從 Atlassian 那裡搶走1000個客戶。"那是很多，對吧？1000個客戶確實很多。你只有19個，抱歉，還有89，000個要去，或者79，000個要去，或者不管具體還剩多少。

我記不清他們確切的客戶數量，但要攻擊一個擁有非常多客戶和非常多收入的公司是非常困難的。這就是為什麼我認為 PLG 作為一種機制對幾乎任何類型的公司都極其重要，如果你能讓這個機制運作起來的話。

顯然，對某些公司來說這個機制並不相關，但對那些確實重要的公司來說，這似乎是值得付出努力的。

Lenny Rachitsky：

這個回答太棒了。我查了一下去年的數據，他們有30萬客戶。

Shaun Clowes：

天哪，我太離譜了。當我離開時一定是8萬客戶。

Lenny Rachitsky：

從那以後他們做得很好。另外，你談到激勵機制以及激勵機制的力量。查理·芒格有一句很棒的話，我查了一下確保我說對了。"告訴我激勵是什麼，我就告訴你結果會是什麼。"

Shaun Clowes：

是的，完全正確。我見過一些案例，銷售團隊試圖執行 PLG 動作，你可以盡你所能地敲打他們，你可以開會告訴他們你真的真的希望他們這樣做，但最終，他們不會這樣做。

對每個其他職能來說也是如此。這就是事物的本質。

Lenny Rachitsky：

我有一些關於這方面的通訊文章，如果大家想深入了解的話。另外，Elena Verna 有一集很棒的播客談論產品主導銷售以及這兩件事的結合，我們會指出來。這是一個我們可以深入探討的完整主題，但在這一集我們不會這樣做。

也許再問一個問題。你提到了你工作過的所有公司，所以你在 Salesforce 擔任首席產品官，具體是在 Salesforce 內的 MuleSoft，Metromile，Atlassian，現在是 Confluent，很多有趣和不同的角色。你是如何選擇去哪裡工作以及選擇接受哪些機會的？

我猜你有很多選擇。

Shaun Clowes：

我必須思考我的職業生涯。所以回過頭來看，Lenny，我不知道向前看時對我來說是否這麼明顯。但回顧過去，我的職業生涯有點像一張賓果卡。

我一直在尋找填補我沒有填滿的格子，因為我覺得這會讓我成為一個更好的專業人士。就像如果我對那種特定的銷售模式或那種類型的營銷或那種類型的產品管理或那種類型的產品或技術棧中的那一層一無所知，好吧，如果我學習那個東西，我會變得更加靈活。

所以實際上有兩件事，這很有趣，學習新東西很有趣。向自己證明你可以做那些新事情很有趣，然後它讓你變得更加靈活，因為這意味著你面對任何問題時，你都見過與之模式匹配的東西。

這有點感覺像你最終帶著槍去打刀戰，因為你看到的每個問題，你都會想："哦，我從另一面見過這個。我從某個其他角度見過這個，所以我知道這個可能會起作用，這個不太可能起作用。"

所以當我在職業生涯早期加入時，我在為一家大型企業軟件公司工作，抱歉，是一家向財富100強公司銷售的小型企業軟件公司。當我加入 Atlassian 時，就像我跟你分享的，我們實際上根本沒有銷售團隊，字面意思是沒有人銷售軟件。

它要麼自己銷售，要麼根本就不銷售。我們發展到擁有8萬客戶。這純粹是產品。他們有增長，就是一家令人難以置信的公司。然後是在 Metromile，這是一家面向終端消費者的消費者公司，被收購了，製造保險產品。

所以他們與技術產品完全無關，就像字面意思是你安裝在汽車上的複雜物聯網設備，但最終它是一個保險產品，你會賣給佛羅里達州的祖母，就像你會賣給千禧一代一樣。

然後在 MuleSoft 是完全後端的軟件，被 IT 組織使用，而 Confluent 是基礎設施，被開發者們用來構建真正有趣的數據驅動應用程序，數據驅動的應用程序來實時做各種事情。你看看所有這些，你會說："這有點隨機。"

但我不是這樣看的，因為我學到了，我實際上做過一段時間的銷售，所以我管理過一個售前工程團隊，環遊世界銷售軟件。所以當我加入 Atlassian 時，我想要理解在沒有銷售團隊的情況下大規模銷售軟件是什麼樣的，這甚至可能做到嗎？

所以我在 Atlassian 的時間裡學到了很多。當我去 Metromile 時，我想："好吧，我以前從未構建過消費者產品。"

我可以說我確實構建了一個接觸數百萬人的產品，因為 Jira 做到了，所以我對此感覺很好，但我從未構建過一個我可以說："是的，一個消費者，你的普通消費者可以使用這個東西。它如此簡單，即使我奶奶都能用。"我從未構建過這樣的產品。

所以我在 Metromile 獲得了那種經驗，這真的很有趣。我從未在像 Salesforce 這樣大的組織工作過，也從未在一個有如此好的銷售動作的組織工作過。你之前談到了分銷。

Salesforce 是一個絕對瘋狂的分銷機器，就是一家令人難以置信的公司，擁有令人驚嘆的分銷網絡和一個出色的營銷方法，這就像是營銷的博士學位。當你在 Salesforce 度過時光時，你會想："這家公司是獨一無二的。它是獨一無二的，它在某個特定領域非常非常出色。"

所以回顧過去，所有這些工作都是，當我說賓果卡時，我只是在這些領域獲得了一個非同尋常的教育，這些都不是顯而易見的。一旦你見過它們，它們就像超能力。能夠將同樣的經驗應用到事物上就是超能力。

所以我真正試圖弄清楚的一件事是為什麼人們經常不這樣做。人們經常停留在一個非常特定的領域。他們更願意停留在一個領域，或者他們更願意停留在特定類型的公司，或者以某種方式運作的角色，比如具有相同運營模式的公司，或者他們以相同的方式計劃，或者他們試圖保持相似的事物。

但似乎很明顯，真正成長的最可能方式是相反的。它是不斷選擇那些在那之外的事物，不是完全超出界限。如果你從未跳傘過，就不要從飛機上跳下來。

顯然你希望它們在某種程度上與你所知道的有關聯，但你希望它們能夠拉伸你並改變你。

我在很多年前在 Atlassian 時有一個真正改變人生的經歷，有一個叫 Tom Kennedy 的人，他是我們的總法律顧問，基本上是首席法律官，是一個終身律師，非常聰明的人。我非常喜歡他。但就是一個律師。

就是一個律師，企業律師，企業法律顧問，我相信你知道他們是什麼樣的。而且是個很棒的人。我記得，所以在我們的會議中他通常不怎麼說話，除非談論法律問題。但我記得在一次會議中，我們正在激烈討論一個產品戰略問題，關於我們應該做什麼。

我們應該往左走還是應該往右走？像往常一樣，他在那裡，他大多保持沉默。然後最終，對話已經持續了15分鐘，他說："嘿，各位，一年前我們談論了 X，Y 和 Z，"他開始闡述我們當時的產品戰略，他說："最近我們說了以下內容，那是一個產品戰略，諸如此類。

現在你們在說這個。難道不明顯這不是嗎？你們說的與那時說的不一致，如果你們真的相信當時說的話，我們應該做 X。"

再次，房間安靜下來，每個人都轉向他，有點點頭，然後每個人都說："是的，好吧，我想我們可能應該做得不同。"所以當 GC 隨機提到他深入理解我們的產品戰略，並且他知道得足夠多可以以那種方式貢獻時，會議就停止了。

所以對我來說，改變人生的部分就是這個認識：如果我要成為一個真正優秀的專業人士，我想成為的那種專業人士就是那種人。

那種可以在各種方面為整個公司做出貢獻的人，不會把所有時間都花在別人的業務上，但理解業務並具有在各種情況下都很危險的腦力和經驗，我的意思是，這是一種讚美的方式。

我不是以消極的方式說這個，而是在各種情況下都很危險。我認為當你有這樣的領導者在你身後和你一起時，你就是不可阻擋的。當你有這種動作發生時，你在商業中就是一股不可阻擋的力量。

Lenny Rachitsky：

哇，那是一個很棒的故事和很棒的觀點。這類似於我總是給 PM 的建議，人們總是在想，"我應該深入研究特定主題嗎？我應該嘗試不同的事情嗎？"

我發現特別是在職業生涯早期，多樣性真的很強大，不僅可以幫助你發現你喜歡的東西，而且就像你說的，只是從產品的所有不同部分和內部工具和信任和安全和平台和消費者產品方面和增長和核心內容獲得見解。

你擁有的這些越多，你就變得越強大。我覺得你的方法的另一個好處是，如果你只在 B2B SaaS 公司工作，如果你的簡歷上有太多這樣的經歷，就很難被消費者公司錄用。

所以只要有它就為你創造了巨大的選擇性，如果你這樣做，就像你做的那樣。

Shaun Clowes：

是的，這很有趣，因為人們過去常談論 T 型人才或諸如此類的，我從來不太喜歡這個比喻，因為它更像是人們是塗鴉形狀的。

我的意思是，你共事過的最優秀的人，他們更像是塗鴉而不是 T 型，因為當然你想要水平能力，所以你想要廣度，你確實想要深度，但你實際上想要在不止一件事情上深入。

現在顯然當我說深入時，我不是說我不能整天做我們財務部門的工作，但我絕對足夠好可以在我們的財務分析中深入三層。我可以在我們的財務方面相當深入，因為我想要這樣，因為這部分很重要。

這很重要能夠做到這一點。所以也許另一種思考那個賓果卡的方式是，我很少後悔深入研究不完全是我工作的東西。我很少後悔。

最壞的情況是我學到了一些我永遠不會用到的新東西，我猜至少這讓我的大腦稍微更靈活了。我不知道，這一定有一些潛在的好處。

但最好的情況是，當我最不期待的時候，在未來的某個時候，它會變成重要的東西。它會成為我需要的工具，但我面對著一些重要的問題，我會想："天哪，這值得每一分錢。"

所以如果你從投資回報率的角度來看待它，做那些不在你專業領域內的事情，不是直接擺在你面前的事情，投資回報率真的可能是非常驚人的。它可能會超出預期，但我猜這是投機性的。因為你不知道你明天是否需要它。

你不知道它是否會成為你經常使用的工具。

Lenny Rachitsky：

有趣的是賓果卡這個比喻。這個賓果遊戲最後有結局嗎？是不是就退休了？

Shaun Clowes：

哦，你是說你得到了所有東西。你收集了所有的寶可夢？

Lenny Rachitsky：

是的，你收集了所有的。

Shaun Clowes：

是的，我在 Salesforce 與某人一起工作，他在那裡工作了很長時間，非常非常成功的人。老實說不需要再工作了。他說了一些我覺得很有用的話。

他說："好吧，現在我人生到了這個階段，我想在我擅長的事情和對公司有價值的事情的交叉點上工作。"

所以基本上感覺像是完成你的賓果卡的獎勵實際上是能夠花更多時間做那些有槓桿作用的事情，你享受並且有高槓桿效應的事情。所以這對我來說似乎是一個很好的結果。

我不認為大多數人去工作然後希望有某種巨大的財務成果，然後說："好了，就這樣了。我要收拾行李退休了。"我認為對大多數人來說，實現某種財務成果或某種獨立或諸如此類的事情實際上只是另一個階段。

在那時候就會是："好的，現在我做什麼？我用我的生命做什麼？"這就是為什麼我之前說，在最終，產品管理有時是世界上最糟糕的工作，有時又絕對是最好的。它兩者都是，而且可以同時是兩者。

所以對我來說很難想像，如果我思考那些我擅長且對世界有價值的事情的交叉點，產品管理是一個相當有趣的選擇，而且每天都不一樣。所以我認為我們是相當幸運的。

對於那些聽眾來說，我的意思是，顯然你的播客接觸到很多產品人。我認為我們很幸運能夠在那個交叉點上運作，但這並不容易，因為你必須展示價值。

這是一個非常複雜的工作，要在其中展示價值並向世界展示價值，而且它不斷受到攻擊，就像你提到的，但當一切都進展順利時仍然很棒。當一個產品在市場上非常成功時，很難描述你從中獲得的喜悅。

Lenny Rachitsky：

順著這些思路，在我們進入非常刺激的閃電輪之前結束我們的對話，我想帶我們到失敗角落。人們聽這些播客節目，每個人總是分享所有這些勝利，一切總是進展順利。

這個的 CPO，那個的 CPO，一直在向上發展，人們想聽聽事情沒有進展順利的時候。因為這些故事人們不經常分享。你能分享一個事情沒有進展順利的故事嗎，也許是你職業生涯中的一次失敗？

如果你從那次經歷中學到了什麼，你學到了什麼。

Shaun Clowes：

我的意思是，有很多事情並不完全按計劃進行，Lenny。在我職業生涯很早期，我還是一名開發人員，我不小心刪除了我工作的公司的一個核心系統。所以那將永遠被銘記，但幸運的是那個已經遠在後視鏡中了。那個-

Lenny Rachitsky：

那不是在 Atlassian？

Shaun Clowes：

不，那是在 Atlassian 之前很久，但非常糟糕。是的，我喜歡談論的一個，我不是直接負責的，但我感覺要負責。我在一家公司，我們推出了一個產品。

那是其中一個產品，事後看來應該很明顯它會失敗，但由於某些原因我們都被潛力蒙蔽了。

這是一個關於測量你公司環境影響並幫助你通過做一些事情來減少公司環境影響的產品，想像一下它是一個電源管理，建築物電源管理，管理電腦的電源消耗，管理空調等所有這些東西的電源消耗。

這基本上就是願景。就像是管理你企業的環境影響。這個想法在當時相當酷，而且也是正確的時機，它仍然是一個事物。

它仍然是一個活躍研究和投資的領域或諸如此類的，但它是那些事情之一，談論錯誤的公司，錯誤的地點，錯誤的時機，錯誤的分銷。事後看來我們完全沒有贏的權利，沒有參與的權利，根本就不該涉足那個業務。

我感覺很糟糕因為我，再次，好主意，錯誤的公司。最終，我們推出了產品。我們實際上在市場上保持了這個產品兩年，最後一根稻草很奇怪。最後一根稻草實際上是當一個客戶終於想要為它付費時。

它已經在市場上兩年了，我們發現自己有一個客戶願意為它支付數百萬美元。他們準備在虛線上簽字，那實際上是我們決定終止產品的時刻，因為我們想："如果這個人簽了這份文件，我們就永遠被困在這裡了。這一個客戶將受合同約束多久或諸如此類。"所以我們最終終止了它。

在失敗兩年後，當有人想要付錢買它的那一刻。我回顧這件事，我就像："天啊，那真是一個很大的..."我感覺很糟糕因為我想："這應該是很明顯的。

這是顯而易見的，我們應該能夠直言不諱地說出真相。"但相反它卻通過了守門人，結果成為了多年來真正意外的資源消耗，只是一個大錯誤。

Lenny Rachitsky：

所以教訓是，要對自己誠實？我喜歡你有這個強制性的機制，就像："好的，這現在變得真實了。"是不是像，"我希望我們有一個更早的強制機制來迫使我們做出決定？"

Shaun Clowes：

是的。我想如果我能做得不同，我可能不一定能100%改變決定，但我應該嘗試。我的意思是，六個月後就很明顯，這東西有點像殭屍產品在走動，我至少可以說："這東西已經死了。"

我們本可以早很多就宣布它死亡，但相反我們又繼續投資了一年半。這就是讓我對它感覺很糟糕的部分。

Lenny Rachitsky：

這讓我想起最近與 Wiz 的 CMO Raaz 的一集，她作為第一個 PM 加入，幾週後與客戶進行了大量通話，她說："我想我需要快速...因為我真的不明白我們在建造什麼。我不明白。"

每個人都說："我也不明白。"是的，創始人只是對他們在做什麼有一個模糊的想法，但他們並沒有真正的想法。這就引發了一個，"好吧，等等，實際上沒有人真的知道。讓我們更具體一點。"這幫助他們進行了轉型。

現在，我不知道你是否了解 Wiz，但他們最終成為了歷史上增長最快的創業公司。

Shaun Clowes：

是的，這不是很神奇嗎？這並不意味著它是永久致命的，但提出那個問題並經歷那個反思，結果他們變得更強大了。

Lenny Rachitsky：

很可怕，但結果往往是最好的。在我們進入非常刺激的閃電輪之前，你還有什麼想提到的或者留給聽眾的嗎？也許是一個最後的金句，你認為在我們結束之前可能有幫助的東西？

Shaun Clowes：

也許有幾個不同的東西，我認為有時很好理解，但只是重複它們我猜因為它們對我來說非常有價值。一個是如果你讓你的日曆支配你，那麼什麼好事都不會發生。

我知道人們經常談論這個，但在產品管理中特別常見的是人們最終被他們的日曆支配。所以這與整個花80%的時間思考業務之外發生的事情有關。

說起來容易，做起來很難，如果你不做，沒有人會為你做。所以除非你找到一種方式強迫它發生，否則很難成功。

所以重複一下，也有人對我說過這個，我從未查證過這句話，但據說科林·鮑威爾說過，如果你用少於30%的可用數據做決定，你就在犯一個大錯誤。

如果你只有在有70%的數據後才做決定，要麼是70%要麼是77%，我記不清確切的數字了，當你有77%的所有可用數據時，你已經等待太久了。

我一直覺得這很有見地，它有點關係到我們之前談論的關於數據的內容，但最終，我們在產品管理中得到報酬是為了做決定，做好決定，為做出能帶來業務利益的好決定而得到報酬。數據太少的決定是致命的。

花太長時間收集太多數據的決定也是致命的。所以一切都是關於試圖找到所有這些不同事物的平衡，以試圖帶來業務優勢。

Lenny Rachitsky：

很好的方式回顧我們一直在談論的所有事情。說到這裡，我們已經到了非常刺激的閃電輪。你準備好了嗎？

Shaun Clowes：

是的。讓我們開始吧。

Lenny Rachitsky：

讓我們開始吧。你最常向其他人推薦的兩三本書是什麼？

Shaun Clowes：

是的，它們是老而好的，可能是《精益創業》，我仍然覺得它真的很好。我認為裡面的關鍵課程仍然適用於很多人，特別是群組分析部分，由於某些原因，我仍然看不到人們做足夠的群組分析。

所以給你一個小提示。然後是 Marty Kagan 和矽谷產品組的《INSPIRED： How to build products that people love》。這是一本老而好的書。我認為它包含了產品管理的許多關鍵課程，即使它已經存在很長時間了。

Lenny Rachitsky：

這些都是經典。很酷。你最近有什麼最喜歡的電影或電視節目嗎？

Shaun Clowes：

我正在看一個節目。我沒有太多時間看電視，主要是在晚上。我喜歡看那些非常輕鬆的東西，完全不會引起任何壓力感，而且很短。所以基本上短小和有趣是我的標準。在 Netflix 上有一個新節目，我想叫做《Detroiters》。

Lenny Rachitsky：

哦，我一直在看那個。

Shaun Clowes：

是的，它真的很有趣。我真的很喜歡。它很荒謬，但很有趣。所以我喜歡它。

Lenny Rachitsky：

主演那個人，他太有趣了。我忘了他的名字。Tim Sweeney 還是什麼的。是的，他太棒了。很好。我一直在看，我很喜歡。它很古怪。我想紐約時報對它的評價是"非常怪異"。

Shaun Clowes：

它太怪異了。在第一集我就想："這是什麼節目？"甚至不清楚它設定在什麼時代，而且很怪異。它真的很酷。

Lenny Rachitsky：

是的。好吧，這是個好描述。下一個問題，你最近發現的最喜歡的產品是什麼？

Shaun Clowes：

是的，這個，你的一些聽眾可能正在使用它，但是 Glean，它現在是一個相當知名的創業公司。他們最近籌集了大量資金。我們在 Confluent 已經使用 Glean 很長時間了，它真的很神奇。它真的很神奇。我不是輕易這麼說的，因為我認為搜索，像企業搜索是計算機領域最難的問題之一。

實際上把它做對是計算機領域最難的問題之一。太神奇了。我很少使用一個產品然後想："這東西比之前的任何東西都好10倍。"對我來說，它就是這樣的。

Lenny Rachitsky：

最簡單的方式來理解它為你做什麼？

Shaun Clowes：

它搜索我們組織的所有知識。所以就像你剛才說的，"AST 是什麼意思？"如果我在會議中遇到這個問題，我只需打開新標籤，它會自動接管我的新標籤或者就像"AST 是什麼意思？"

它會給我總結 AST 的含義，並給我公司內部所有關於 AST 含義的文檔鏈接，然後它會告訴我誰是我們公司的 AST 專家。它就像有了第二個大腦。它是一個非常酷的組織搜索工具。

Lenny Rachitsky：

很好的建議。好的，還有兩個問題。你有什麼最喜歡的人生座右銘，是你經常回顧並與他人分享的，在工作和生活中覺得有用的嗎？

Shaun Clowes：

我經常思考這個。當我開始我的職業生涯時，我是一個工程師中的工程師。我非常注重技術正確性和計算機能做什麼，以及技術正義，正確的答案而不是只有一個正確答案等等。

這是一個冗長的方式來說，我經常想到這句話，就是"人們不在乎你知道什麼，直到他們知道你在乎。"所以我意識到真正能影響人們，不在於你是對還是錯。

最終，它首先是關於信任和關係，關心彼此的結果是什麼，他們的動機是什麼，所有好的事情都建立在這之上。一旦你有了這些基礎，那麼你就可以建立真正好的夥伴關係，這就是好的進展來自的地方。

Lenny Rachitsky：

哇，這太好了。它與《激進坦誠》的理論相連，類似於關心。人們需要感覺到你深深地關心他們，然後才會接受你的建議。

它也與我正在讀的一本叫《傾聽》的育兒書相連，這是之前一位嘉賓推薦的，書中說當你的孩子感覺到與你的聯繫很弱時，他們就會有問題。所以解決方案是建立更強的聯繫，讓他們知道你深深地關心他們。

所以這真的與我一直在讀的很多東西相連。

Shaun Clowes：

是的，沒錯。

Lenny Rachitsky：

很好。最後一個問題。你出生在悉尼，人們可能從你的口音猜到。如果有人要去悉尼旅遊，你有什麼建議嗎？你認為他們應該去看什麼，悉尼最喜歡的地方？

Shaun Clowes：

是的，悉尼是一個非常美麗的城市，它以海灘聞名，基本上是一個大都市。當你參觀時可能會非常驚訝。

它是一個很大的城市，非常都市化，有點像紐約，但是是有著非常美麗海灘的紐約，如果你想這樣想的話，這很瘋狂。但實際上在悉尼周圍有很多很酷的自然景觀和美麗的事物。

所以如果你想做一些非常規的事情，你可以去一個叫藍山的地方，離悉尼大約一個半小時的車程，你可以在瀑布上進行繩降，這個，好吧首先你要穿過一個充滿水的峽谷進行峽谷探險，然後在最後從瀑布上繩降下來。

如果你在尋找一個真正美麗，有趣的冒險類型的事情，離一個巨大的大都市一個多小時，那就是我的快樂之地。在美麗的城市旁邊有真正美麗的戶外活動。

Lenny Rachitsky：

你說你航行，什麼樣的從瀑布上航行？

Shaun Clowes：

繩降。你可能會想到它是攀降。攀降，我想是的。是的，用繩子把自己放下來或...

Lenny Rachitsky：

明白了。因為當我聽到航行時，我想的是一艘船跳過瀑布。

Shaun Clowes：

哦，不，繩降在美國你們稱之為攀降。

Lenny Rachitsky：

攀降，是的。哇。很酷。Shaun，你太棒了。這次談話非常精彩。非常感謝你來這裡。最後兩個問題。如果人們想聯繫你，他們可以在哪裡找到你？另外也請指引人們去看看你在 Reforge 創建的課程。最後一個問題，聽眾如何對你有幫助？

Shaun Clowes：

當然。是的，我的 Reforge 課程，你可以在 reforge.com 查看所有內容，如你所說，有關於留存、參與度的課程和面向產品經理的數據課程，所以很高興看到大家從中獲得價值。

已經有很多人上過這些課程，我真的從中獲得很多價值，因為就像我說的，我的目標之一是幫助我們所有人成為更好的產品人。我認為我們的影響力可能是巨大的。

在哪裡可以聯繫我，當然可以在 LinkedIn 上，但也可以在 X 上找到 ShaunMClowes。關於如何對我有幫助，廣泛來說，我總是對新想法持開放態度。

如果人們對如何做得更好的 B2B、PLG、更好的 B2B 產品主導銷售有想法，例如，在企業公司內部有更好的分銷方式和產品主導銷售以及產品主導增長的方式，嘿，我也願意學習。我們都在一個大旅程中學習如何把這些做得更好。

Lenny Rachitsky：

說得太對了。Shaun，非常感謝你來這裡。

Shaun Clowes：

太棒了，非常感謝你，Lenny。很開心。