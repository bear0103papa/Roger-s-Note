---
layout: post
title: "MongoDB 的 Sahir Azam：向量資料庫和 AI 的資料結構"
date: 2025-02-24
categories: [
        "Sahir Azam",
        "Pat Grady",
        "Sonya Huang",
        "人工智慧",
        "企業軟體",
        "MongoDB",
        "2025"
]
description: "MongoDB 產品負責人 Sahir Azam 解釋了向量資料庫如何從語義搜尋發展成為 AI 應用程式的重要記憶體和狀態層。他描述了他對人工智慧如何改變軟體開發的看法，以及如何結合向量、圖形和傳統資料結構來實現關鍵任務企業人工智慧用例所需的高品質檢索。借鑒 MongoDB 成功的雲端轉型，Azam 分享了他的願景，透過整合工具和抽象讓主流開發人員能夠使用複雜的功能，從而實現 AI 開發的民主化。"
toc: true  # 啟用目錄功能


---

<span class="original-link">原文連結： [MongoDB 的 Sahir Azam：向量資料庫和 AI 的資料結構](https://www.sequoiacap.com/podcast/training-data-sahir-azam/)</span>

**Sahir Azam**  在一個充滿概率性軟體的世界裡，品質的衡量標準就是那最後一哩。你如何達到 99.99X 這種品質呢？那麼，通常我們與製造業相關聯的品質工程領域，是否會應用於軟體？這真的讓我開始思考，因為你無法像傳統應用程式與傳統數據庫交互那樣，獲得確定性的結果。因此，嵌入模型的品質、如何構建你的 RAG 架構、以及將其與業務中發生的交易的實時視圖結合，這些才是達成高品質檢索和結果的關鍵。而在這個充滿概率的世界裡，除非它是高品質的，我看不到它能夠進軍保守企業中的關鍵任務應用領域。而這正是我們目前非常關注的問題空間。

**Sonya Huang**  今天我們很高興歡迎 Sahir Azam，他是 MongoDB 的產品與成長領導者。

Sahir 是 Mongo 成功轉型從內部部署到雲端的架構師之一，現在他正在幫助引領 Mongo 在 AI 先行的世界中的發展。

Mongo 進入向量數據庫的旅程始於電子商務的語義搜索，但已經發展成為更為根本的目標：成為 AI 應用程式的記憶與狀態層。

我們很高興能聽聽 Sahir 對向量數據庫過去與未來的看法，以及在 AI 代理和應用程式以及無限軟體創造的世界中，基礎設施將會如何演變。

**Sonya Huang**  Sahir，歡迎來到節目。非常高興能夠請到你。

**Sahir Azam** 
謝謝，Sonya。我非常高興能來這裡。

## AI 如何改變應用程式開發與數據庫市場

**Sonya Huang**  在本集節目中，我們將深入探討從向量數據庫到嵌入模型、知識圖譜，還有更多的話題。我想先從一個大問題開始，或許是你的熱點看法：AI 會改變數據庫市場嗎？AI 會改變應用程式開發嗎？

**Sahir Azam**  這是一個有趣的問題。我認為相關的，可能更有趣的問題是，它是否會改變應用程式的開發。我認為它確實會。我們現在看到的是，AI 驅動的生成型 AI 應用程式解決了一些傳統確定性軟體無法解決的問題。我知道我曾讀過 Sequoia 關於服務即軟體的觀點等等，我們在市場上的早期採用也看到了這一點。因此，這反過來改變了我們與軟體互動的基本方式，也改變了應用程式業務邏輯隨著像代理人這樣的技術發展的方式，這一切都有潛在的影響，迫使數據庫層也需要進行轉型。

**Pat Grady**  我們能稍微深入探討一下嗎？我很感興趣，因為你們在這一層工作，能看到很多正在開發的東西。今天人們正在開發的東西，是幾年前在這些技術出現之前無法開發的嗎？

**Sahir Azam**  是的，我認為一方面，我們看到的趨勢之一是，創建軟體變得比以往任何時候都更容易、更高效。所以，世界上會有更多的軟體，這意味著它會對數據持久性、存儲和處理產生影響。這是相關的一部分。

但就使用案例而言，我認為現在我們能夠以完全不同的方式與計算機互動，超越我們所有人熟悉的傳統網頁和移動應用程式，更具互動性的體驗，我認為現實與虛擬世界的融合是我們未曾見過的，顯然，AI 如何影響機器人技術是一個重大趨勢。我最近讀到一篇來自 LangChain 的很棒的博客，討論了“環境代理人”以及如何在沒有特定人類意圖的情況下反應信號。

我認為我們正處於人機交互的最早階段，這將徹底改變。我認為這將解決許多提升我們個人生活和專業生活生產力的使用案例，並解決傳統軟體無法處理的基本生產力問題。我認為這是這一切的最大變革，也許它將有潛力去實現。

**Pat Grady**  你有沒有一個最喜歡的例子，不論是來自 Mongo 的客戶（當然你愛所有的客戶），還是你自己使用過的最喜歡的案例？

**Sahir Azam**  是的，我會說，總體來說，我們看到更多的——像大多數事情一樣，我們看到更為複雜、高級的使用案例通常會首先出現在風險容忍度較高、發展速度較快的創業公司中。但因此，我會選擇幾個已經捕捉到我們想像力的企業使用案例。其一是，我們與歐洲一家大型汽車製造商合作，他們在全球擁有大量車隊。他們有許多第一方和第三方的維修和維護站點，這些地方是人們去尋求幫助的地方，不論是經銷商還是其他維修站，當他們的車輛出現問題時。人們常常會遇到這樣的問題：「我聽到我的車有點奇怪的聲音，我該怎麼診斷呢？」這意味著，通常他們會進去，一個擁有專業知識的技師需要進行調整，找出問題所在，然後查閱手冊，找出修復步驟或需要訂購的零件。

**Pat Grady**  是的。

**Sahir Azam**  我們與他們合作，實際上確定了一個音頻嵌入模型，可以讓他們用手機錄製這些聲音，並且將這些聲音與一個語義匹配的車輛常見問題的聲音資料庫進行對比，這樣就能將診斷時間從通常可能需要幾個小時的複雜診斷縮短到幾秒鐘。這幾乎就像是「Shazam」用於車輛診斷。

**Pat Grady**  [笑]

**Sahir Azam**  然後，另一方面，與其翻看 PDF 或是實體手冊來了解批准的修復步驟，現在它變成了一個自然語言介面，能夠告訴你：「好，這是我們匹配到的問題，那麼下一步該如何修復？」這一切都涉及到非結構化數據、問題中車輛的語義含義，並且如果你將這個業務案例進行外推，跨越數千家經銷商或數百個不同車型及版本，這對他們來說可能節省數百萬美元，並且改善顧客體驗和消費者對品牌的情感。因此，這無疑是個很酷的例子。

另一個例子來自於一個受監管非常嚴格的行業。我們與 Novo Nordisk 合作，這是一家全球最大的製藥公司之一。顯然，藥品的批准是一個經過高度審查的過程。所以，有一種臨床研究報告的概念，製藥公司需要填寫這些報告，這通常需要大量的手動工作來編寫、結構化、審查和批准。他們基本上能夠利用一個大型語言模型，將它訓練於所有已批准的藥品、他們手動執行的所有過程，現在他們可以在幾分鐘內完成 CSR（臨床研究報告）的初稿。

**Pat Grady**  嗯。

**Sahir Azam**  這樣就縮短了初步草稿的撰寫周期。這個初步草稿的質量比手動撰寫的要高。所以同樣，你可以快速看到，這些使用案例對真實的美元回報產生了直接影響，儘管在我們目前看到的初期階段生態系統中，這些案例未必處於最前沿，但它們被應用於規模化的行業中，對他們和他們的客戶有著巨大的影響。

**Pat Grady**  沒錯。

**Sonya Huang**  現在這些應用程式的形態在改變，正如你所說，它們是多模態的，是代理性的，是環境代理性的，那麼這對數據庫層意味著什麼？如果你不介意的話，能否簡單介紹一下目前數據庫在我們所知的確定性軟體中的角色，以及你認為在這種新興的 AI 應用市場中，數據庫將扮演什麼角色？

**Pat Grady**  這是好消息還是壞消息？

**Sahir Azam**  我們感到非常興奮。我之前輕微提到了一個觀點，就是如果世界上有更多的軟體，我認為生成型 AI 將使創建更多類型的軟體體驗變得更容易，這通常對任何數據持久性基礎設施技術都是一個有利的趨勢。這並不意味著 MongoDB 或其他特定供應商會自動受益，這需要大量的執行來確保我們在技術上，以及我們的夥伴關係和生態系統中，能夠為此做好準備，這也是我花很多時間去做的事情。但總的來說，更多的軟體意味著更多的數據和對數據持久化的需求。所以這是一個非常宏觀的趨勢，我們當然對此感到非常興奮。

我認為，從相對簡單的生成式 AI 使用案例轉變過來，這些使用案例通常只是通過與大規模語言模型（LLM）進行聊天的方式進行互動，這樣的情況不一定需要非常先進的數據持久性。然而，隨著企業需要將其 AI 應用的結果與專有信息進行結合，或者控制結果集以確保檢索結果的高質量，現在就需要大量與這些基礎模型及其運行業務的底層信息進行互動。而很多這些信息並不一定是可以在互聯網上公開訓練的數據。

因此，無論是進階的還是簡單的 RAG 工作流程，無論是微調訓練後的不同方法，我認為未來隨著這些模型的低延遲化，它們將會更多地與組織內部生成的實時業務數據進行互動，這樣與企業的數據和基礎模型的互動需求將隨之增加。而這正是我們在當前最先進的公司中所見到的情況，他們正在根據自己的使用案例，構建真正複雜的方式來控制這些 LLM 輸出的結果，並將其與推動其應用或業務運行的操作數據結合起來。

所以我認為我們仍處於這個過程的初期階段，對於這一領域未來的發展，我確實從根本上相信，數據庫將需要在高質量檢索，特別是非結構化數據的檢索方面變得更加優秀。因為，當我看到所有這些嵌入模型，並看到我們用概率性軟體所能做到的事情，它將世界上 70% 的非結構化數據的價值挖掘出來，並使其能夠以以前無法實現的方式應用於應用程式中。我認為這就是實際的機會。

**Sonya Huang**  那對於這一點，反方觀點會是什麼呢？例如，我想到我們在第一次 AI Ascent 會議上看到的 Jensen，他曾說過：“每個像素都將被生成，而非渲染。”我理解「渲染」是指從數據庫中檢索數據。那麼，反方觀點會是什麼呢——隨著生成式 AI 的崛起，這對數據庫來說是好消息還是壞消息？

**Sahir Azam**  是的，我認為反方觀點對我來說並不在於背後是否有一個數據庫，而是在哪個層次進行抽象，以及這是否是應用開發者在構建應用時的選擇，還是通過某個更高層次的 API 進行抽象處理？或者，這是否是大規模語言模型（LLM）做出的選擇，當它自動生成軟體或自動渲染環境時，在哪裡選擇持久化數據？

**Sonya Huang**  嗯。

**Sahir Azam**  但最終，大家常開玩笑說，AI 應用仍然是應用。你仍然需要安全地持久化交易，以確保人們的銀行賬戶餘額準確。你仍然需要能夠基於文本關鍵字來搜索信息，而不僅僅依賴語義含義。所以，我把所有這些來自數據層的生成式 AI 需求視為是對傳統應用需求的補充，而非替代。

**Sonya Huang**  而且，你知道，人們今天喜愛 Mongo 的原因之一就是開發者體驗，對吧？如果我們將時間推進，也許將來會有數百萬甚至數千萬的人類軟體開發者，但會有數萬億個可以稱為代理開發者的存在。那麼，什麼樣的代理開發者體驗才算好呢？為什麼一個代理會選擇使用 Mongo 作為其數據庫，如果這樣的問題有意義的話？

**Sahir Azam**  是的，我認為這是個有意義的問題，這也是我們一直在思考的一個問題——軟體開發的性質將如何改變。我認為，隨著我們從更簡單的生成式 AI 驅動的應用程式過渡到更高級的、更具代理驅動的業務邏輯應用，狀態將變得更加必要，因為現在你需要協調一個更複雜的工作流程，在其中你需要能夠追蹤交易某一部分的結果並協調這些結果。所有這些都需要將數據存儲起來，並且隨著時間進行操作和更新。

我認為，隨著時間的推移，生成式 AI 應用將變得更加具狀態，這意味著數據和數據庫的消耗會逐步增加，這是未來的發展趨勢。現在在抽象層次方面，我認為問題在於：如果開發者體驗是今天讓任何技術對人類開發者來說都變得非常可及的原因，那麼這同樣的價值主張是否也適用於 AI？即便我們超越僅僅看數據庫領域，看看一些被稱為 AI 平台即服務（AI platform-as-a-service）型的公司，像是 Vercel v0 或 Replit 等等，我認為我們看到的是，至少在早期的 AI 生成軟體中，開發者偏好的是高層次的抽象化帶來的優秀開發者體驗。所以我認為現在還很早，無法下定論，但我確實看到了一些非常有前景的跡象。

**Pat Grady**  說到更高層次的抽象化，我忘了是誰提出了這個一語中的的說法。某人曾說過，“英語是最終的抽象層次。”也就是說，最終，你只需要用普通的英語來描述你所需要的產品需求，基礎模型就能生成所需的代碼，幫你構建出任何你想構建的應用程式。首先，你相信這會成為未來的狀態嗎？其次，這對 Mongo 是好消息嗎？因為這意味著將會有更多的軟體，而大部分的軟體都需要一個數據庫作為支撐嗎？還是對 Mongo 是壞消息，因為這可能削弱了你在開發者體驗方面的優勢？你覺得這會怎麼發展，對 Mongo 有什麼影響？

**Sahir Azam**  是的，我認為對於數據庫來說，總體來看，這絕對是個利好消息。我對 MongoDB 特別有信心，因為我們的數據模型非常適合管理結構化數據、半結構化數據，現在也能處理嵌入式的非結構化數據。所以我認為我們擁有一些基本的架構優勢，我們相信這些優勢在 AI 領域中會變得更加顯著和重要，無論是與人類生成的軟體還是機器生成的軟體交互時，這些數據都能夠被有效處理。

當然，我們並不會僅僅因為擁有這些優勢就停滯不前。我們確實在與 AI 框架和模型提供商的整個生態系統合作，確保我們能夠很好的集成，無論是推理服務商還是開發框架等，確保像 JavaScript、Web 2.0 和 Cloud 這樣的技術，對我們的業務有著強大的助力，現代生成這些應用的技術堆棧中，MongoDB 都能夠作為預設選擇得到良好的整合。所以在這方面我們也在做很多工作。

我們還專注於這樣一個想法：什麼是 LLM（大規模語言模型）質量訓練的等價物？或者說，什麼是 SEO（搜尋引擎優化）對 LLM 的影響？這意味著，如果你去抓取互聯網上的數據，訓練一個代碼助手來處理某項技術，這些是否真的是最佳實踐？可能並非如此。但目前對於一個特定領域的廠商或技術專家來說，並沒有標準的方式來提交 MongoDB 代碼的經典訓練數據。例如，我們正在與一些實驗室合作，探索如何進行這樣的訓練方法，並測試我們能夠做些什麼來創建數據集，以保證這些系統的輸出質量可靠。我們最不希望發生的情況就是有人說，“我想使用 MongoDB，幫我生成一些功能代碼，”但結果代碼質量差，表現不佳。所以，我們在這方面做了很多有意圖的努力，確保隨著未來幾年事態的發展，我們的技術能夠與時俱進。

**Pat Grady**  嗯。

**Sonya Huang**  實際上，對於這一點，我認為有越來越多的討論，認為我們在全球範圍內的公開數據正達到瓶頸。

**Sahir Azam**  是的。

**Sonya Huang**  還有大量數據仍然存在於私人企業的數據中。你們處於其中的中心位置。我很好奇你怎麼看待自己在市場中對這一變化的角色，尤其是在尋找下一波訓練數據時。你們是否看待自己作為客戶的訓練數據提供者？還是你們與實驗室進行合作？你的客戶主要是希望利用 Mongo 中的數據進行 RAG（檢索增強生成），還是他們也在考慮對他們的數據進行模型訓練？

**Sahir Azam**  是的，明確來說，任何我們代表客戶管理的數據都歸客戶所有。所以我們當然不會將這些數據拿來訓練任何超出客戶希望我們訓練或用於 RAG 的模型。這絕對是我們專注的方向。我們看到各種不同的情況——一些非常簡單的用例，客戶僅使用存儲在 MongoDB 中的核心運營數據或元數據作為其 RAG 工作流程的一部分。我們也看到向量採用的增長，它是我們增長最快的新品領域，因為客戶嘗試將元數據、交易數據和語義搜索結合成一個單一的系統，用於更高質量的檢索類型的用例，我認為這就是市場的走向。

然後我們也看到一些客戶希望使用他們在 MongoDB 和其他系統中的數據來微調或直接訓練針對特定用例的小型模型。我不認為會有一種特定的模式適用於所有的用例。我認為會有很多不同的方式，客戶會根據他們的延遲需求或性能需求進行優化。

## 向量數據庫：從語義搜索到 AI 的記憶層

**Sonya Huang**  那麼，我認為你擁有關於向量數據庫市場最引人注目的視角。我們經常向我們的投資組合詢問他們的 AI 技術棧，並且 Mongo 一直是大家使用向量數據庫的首選，所以我認為你對這個領域有著最深刻且最有趣的看法。從 20,000 英尺的高度來看，似乎人們將 LLM 當作擁有某個預訓練截止日期前的全球知識，但之後你仍然需要 RAG 和向量數據庫來補充知識，為其提供特定領域的知識，幾乎就像是信息檢索知識源一樣。但如果我看向量數據庫，它們的起源似乎來自語義搜索領域，像是電子商務等，那是一個完全不同的領域。所以，你怎麼看待這一點？目前人們都在如何使用向量數據庫？它是過去的一項技術，被不當地硬性套用到這一信息檢索的用例中，還是它是理想的數據結構，可以作為 LLM 的知識基礎設施？你怎麼看待這一切的發展？

**Pat Grady**  是的，我也可以問一個關於這個問題的快速問題嗎？

**Sahir Azam**  當然。

**Pat Grady**  我知道 Mongo 的向量數據庫，因為它與生成式 AI 有關，並且看到很多人將其用於生成式 AI。

**Sahir Azam**  是的。

**Pat Grady**  但是在生成式 AI 之前，你們就有向量數據庫嗎？

**Sahir Azam**  我們是從一個更經典的語義搜索用例開始的。

**Pat Grady**  好的。

**Sahir Azam**  幾年前，我們注意到，許多客戶會將 MongoDB 作為運營數據庫，並且與之並行地使用反向索引的搜索引擎進行全文本的語義搜索。我們的客戶基本上說，“為什麼我必須將數據在這兩個系統之間複製，只為了獲得我想要的搜索結果來為我的應用提供支持？”所以，出於對開發者體驗和簡單性的關注，我們認為這是一個顯而易見的問題，值得我們去解決。

因此，我們從我們的搜索產品開始，真正簡化開發者的操作，讓開發者能夠與一個數據庫交互，但這個數據庫有不同的索引和存儲模式，可以同時支持 OLTP 類型的查詢和全文本搜索查詢。我們的一些電子商務進階客戶當時提出了要求：“這很好，但我希望開始做語義相似性搜索，並將全文本語義搜索與相似性搜索結合，這樣才能給我更高質量的搜索結果。”這就是我們開始被推動將向量功能納入我們引擎的原因。

對我們來說，我們一直在努力做的是，消除客戶需要使用多個系統的需求。因此，當我們說我們增加了這些功能時，很大一部分就是如何將其優雅地整合到我們的數據模型中，如何擴展我們的查詢語言，讓開發者感覺這並不是一個獨立的系統，而是他們正在與其作為應用開發的一部分互動。

所以我們當時是沿著這條線走的，然後當然，隨著 ChatGPT 的爆發，我們意識到這將比我們想象的更為重要。所以我們加大了努力，加快了步伐，擴大了策略，確保我們與各種新的框架高度整合，並且與 AI 實驗室進行了更多的合作，正如 Sonya 所說，將向量嵌入、元數據甚至交易數據集成到 RAG 中，確實與純粹的語義搜索用例有很大不同。

但當我們看我們最先進的客戶時，我們發現，將所有這些模式整合在一起變得非常重要，因為你需要根據你知道的非結構化數據的元數據進行過濾，不管你構建的應用是圍繞什麼進行的。有時候你需要像傳統搜索引擎一樣根據關鍵字和相關性進行排序，然後還需要理解並提取向量嵌入中的語義。這裡有很多關於如何提升結果質量的問題。只有這樣，他們的整體應用才能達到質量預測的百分比，尤其對於大型企業，這樣他們才能信任將某個產品展示給他們的客戶，尤其是在受監管行業中。

因此，能夠將所有這些整合在單一系統中，對我們來說是一個真正的優勢，否則就需要大量的 RAG 操作來將這些東西組合起來，這是可行的，但會給開發周期和應用代碼帶來巨大的負擔。坦白說，你需要是一個非常成熟的團隊，才能獨立解決這些問題。所以我們正在通過讓這一切變得簡單，來實現它的普及化。

**Pat Grady**  你怎麼看待向量和圖的關係？它們是替代關係還是互補關係？有什麼取捨？我們看到向量基礎的 RAG，也看到圖基礎的 RAG。

**Sahir Azam**  是的。每過一週，總會有一種新的方法來提高檢索質量，這是我認為每個人都在追求的東西。我認為它們是互補的。你知道，使用圖關係有其理由，因為這是一種理解的增強，你可能無法僅通過向量嵌入來推斷。因此，我將其視為附加的，正如基於你知道的元數據對非結構化數據和嵌入進行預過濾一樣，這也能提高結果質量。所以，我確實認為這些模式是互補的。

我們的目標是讓開發者簡單地將所有這些整合在一起，這樣他們就不需要在不同的數據庫中處理物件的圖表示、元數據、交易數據以及向量搜索數據庫，然後再嘗試將它們統一起來，這正是發生的情況。我們希望簡化這一切。

**Sonya Huang**  在代理系統中，是否可以簡單地將 LLM 視為“大腦”，而將數據庫，無論是向量數據庫還是這些數據庫的超集，視為“記憶”？這樣的理解方式合理嗎？

**Sahir Azam**  我認為這絕對是其中一種思考方式，因為你確實需要持久化記憶和狀態，尤其是當代理在進行更複雜的工作流程並需要跨多個端點進行交互時，而不僅僅是單一基礎 LLM 的一次性調用。所以你需要保持更多的狀態。我將它們視為新興架構中的兩個組成部分。你當然有計算、存儲和網絡作為底層的基本元素，但現在有一整套基於 LLM 的用例，它們更加具備概率性，可以自動化原本需要知識工作者手動完成的任務，這是非常強大的。但這些任務需要存儲狀態，並且能夠與應用驅動的交易及其他結構化或半結構化的信息進行交互。

這些東西結合在一起，才會創造出優秀的應用體驗和最終用戶體驗。這不是“非此即彼”的問題。我認為它們是相輔相成的，而且在 LLM 的延遲時間和速度越來越低的情況下，它們的互補性會變得更加強大。如今，你可以將現實世界中的發生情況用來增強 LLM 的結果，這樣的交互速度將更接近實時，而不像今天這樣存在很大的交互延遲。

**Sonya Huang**  所以你是在說，數據庫不僅是 LLM 的記憶，它還反映了世界狀態？

**Sahir Azam**  是的。

**Sonya Huang**  就是說，LLM 需要與世界狀態進行交互？

**Sahir Azam**  完全正確。

**Pat Grady**  我認為這種大致的框架與我們內部討論過的觀點是一致的。如果你把底層視為原始基礎設施——計算、網絡和存儲，頂層是應用，那麼中間有所有這些東西，對於任何確定性的東西，你會希望使用向量數據庫、圖數據庫、關聯數據庫、NoSQL 數據庫，這些都是傳統的數據庫領域。對於任何更加概率性的東西，你會希望有類似於 LLM 的東西。這樣的功能給你帶來一些人機交互和一些推理，這是對這部分世界功能的補充。

但我想進一步討論，因為聽起來我們對未來的這種默認架構或新興模式的觀點相當相似。如果你再進一步推理，這是否意味著投資者應該將 Anthropic 或 OpenAI 等基礎模型公司的 API 部分視為 Mongo？意思是，它們在技術堆疊中佔據相似的層次，二者都位於公共雲層之上，位於應用層之下。Mongo 是不是可以作為對 OpenAI 和 Anthropic 等 API 業務未來發展的參照框架？

**Sahir Azam**  是的，我認為這是一個有趣的代理，因為你有時會看到這樣的說法：“LLM 是新的操作系統。”對我來說，這在應用功能和能力層面上並不那麼合邏輯。也許我錯了，現在的變化非常快。但我們看到的現象是，這些其實是並行且互補的組件，推動並服務於應用的業務邏輯和交互層。

**Pat Grady**  是的。

**Sahir Azam**  並且顯然，現在大規模語言模型能夠推理並提供人機交互的場景，是以往無法實現的。這是它們驚人且強大的部分。但在我們看到的任何架構中，這並不會取代需要從結構化數據中獲得確定性輸出的需求，比如管理交易、搜索及其他數據組件。這些是互補的。我認為這仍然是初期階段。像 Sequoia 所寫的那樣，大家現在還不知道真正的下一代商業模型和應用是什麼。現在我們仍然處於早期的階段，這也是令人興奮的地方，可以看到所有這些不同的早期階段公司或我們之前提到的企業用例。即使這樣，我仍然認為未來還有更多的發展。

**Pat Grady**  是的，目前還都是假設。

**Sahir Azam**  是的。

**Sonya Huang**  嬉，談到假設，現在有很多關於模型架構會如何跨越和下一代模型架構會是什麼樣子的假設。我對數據庫方面的假設很感興趣。我們似乎從什麼都沒有到向量數據庫發展得很快。你認為我們會跨越發展到一種新的數據結構來服務這些 AI 系統，還是你認為這種架構已經是理想的架構？

**Sahir Azam**  是的，我認為就向量來說，基本的數據架構似乎是很強的原始組件，並且似乎能夠持續穩固。我們現在仍在努力弄清楚如何充分發揮這些潛力。如果未來有其他技術出現，當然是開放的，但我認為對我來說它仍然是一個原始組件。你知道，曾經市場上有個問題，就是向量數據庫是否會成為一個全新的市場細分領域，還是它會取代核心數據庫？我們將它視為一個原始組件。如果你需要管理非結構化數據，結合索引和向量嵌入的能力，再加上可以表達非結構化數據意圖的高質量嵌入模型，這其實就像是數據庫中的文本索引或 B 樹索引一樣，是一個全新的原始組件。

所以我們將它視為一個基礎元素。我不認為它會消失。我認為現在需要解決的問題是，如何從這些數據中創造高質量的結果，如何產生高質量的向量嵌入，或如何通過其他信息來增強這些結果，這方面目前有大量的發展。我認為這方面還遠未定型。

**Sonya Huang**  我明白了。所以數據結構、數據存儲，就是向量及其存儲方式，這似乎是非常合理的。而需要優化的部分就是如何從這些向量中提取出意圖和意義，對嗎？

**Sahir Azam**  是的，而且我不是說不會有優化或者在如何使其更高效、更具性能、更具成本效益方面沒有創新空間，數據庫領域始終會有很多發展。所以，我不是在說這部分不會有創新。但我認為更有趣的是，當你處於一個概率性軟件的世界裡時——我聽到 Ben Thompson 來自 Stratechery 的一個有趣觀點，他提到，在概率性軟件的世界裡，質量的衡量標準是“最後一公里”。你如何達到 99.99X 這種質量？所以，傳統上我們會將質量工程與製造業相關聯，那麼這樣的思維能否也適用於軟件領域？這讓我開始思考，在這樣的情境下，你不一定能像傳統應用與傳統數據庫交互那樣獲得確定性的結果。所以，嵌入模型的質量、如何構建 RAG 架構，如何將其與實時業務交易的視角結合，這些才是能夠為你提供高質量檢索和結果的關鍵。而在概率性的世界裡，除非它達到高質量，否則我看不到它能夠應對保守企業中的關鍵任務使用場景。這也是我們目前非常專注的一個問題領域。

**Sonya Huang**  你如何看待推理模型方面的創新，這些創新與你所在領域的發展有什麼交集？

**Sahir Azam**  是的，我認為，當涉及推理時，記憶就成為了關鍵，長期邏輯也同樣如此。我認為當推理進入更高階的代理工作流時，所有這些都需要狀態，正如我之前提到的。因此，在一個非常寬泛的層面上，我認為數據庫對這些推理的支持會比單純的 LLM 一次性回答引擎更為重要。所以，我認為這就是一個宏觀趨勢。作為最終用戶，我對這些推理模型非常著迷。我是那種——我知道這在過去幾周並不算新穎的觀點，但我認為 Google 的 Gemini Deep Research 及其產品體驗非常精彩。所以，我認為在用戶體驗和應用可建立的使用場景方面，這些推理模型能夠做很多事情，而至少第一波 LLM 是無法真正推動這些應用場景採納的。

## 從本地部署到雲端：MongoDB 的業務轉型經驗

**Pat Grady**  好，這是完全不同的方向。所以，關於你背景的一些事情，聽眾們可能不太了解，你其實是從傳統的本地企業軟件業務架構師，轉型領導了 MongoDB 從本地部署到雲端原生的消費型業務，而現在這已經成為 MongoDB 的主要業務。我認為這樣規模的轉型真的非常難以實現，而你們做到了，並且規模也非常可觀。當然，現在公司已經達到數十億美元的收入規模。之所以我強調這一點，是因為我覺得現在可能有很多企業，甚至是很多初創公司，面臨著類似的挑戰，需要進行業務轉型。而你們的轉型是從本地部署到雲端，這並不是很多公司成功做到的。而現在我們正在面對的轉型是從非 AI 到 AI 的轉型。所以問題是，對於 MongoDB 來說，當初是怎麼做到的？也許簡單談談轉型的性質，什麼因素讓你們成功？對於那些現在正在進行 AI 轉型的公司，你有什麼建議嗎？

**Sahir Azam**  是的，我很感謝你提到這一點，當然，我們非常幸運能夠成功地實現這種關於業務模式和產品策略的重大轉型。當然，這需要許多人付出巨大的努力來實現。但我認為有一個很重要的部分是，你使用了「業務轉型」這個詞。

**Pat Grady**  是的。

**Sahir Azam**  這是非常重要的，因為我認為對於許多嘗試推動這類轉型的公司來說，他們只是將其視為「這只是一個新的SKU，一個新產品，我只需要關注這個就行了」。但我認為我們確實把它視為一種業務轉型，並且因此我們確保每個功能部門的領導者都能理解，他們在這個轉型中扮演了非常重要的角色，並且他們也要對在消費型雲端優先模型下，如何改變客戶成功、財務模型，甚至每個具體功能進行思考負責。

**Pat Grady**  那麼在早期，當產生所有收入的還不是這個新模型時，你們是如何獲得員工支持的？如何讓大家關心？

**Sahir Azam**  是的，當然。首先，絕對需要強有力的自上而下的支持。你知道，對於公司來說，推出 Atlas，實現這一轉型是一個極其重要的業務優先事項。沒什麼比這更能突顯自上而下的一致性了。這也包括授權我作為推動這一變革的人。所以，當我去找我某個同事時，我會說，「嘿，我覺得我們需要在這裡投入一些人力，來思考業務的雲端部分」，那時我就有能力去影響這件事。

但我認為重要的一點是，我們並沒有將這視為一個與核心業務隔離開來的獨立小業務單位。我們希望每個部門的領導都能感覺到他們是這個轉型的一部分，而不是一些會損失部分功能的競爭性任務。所以這是非常重要的一點。當然，這意味著我得做更多的外交工作，而不是直接的權威，但這對於讓整個公司在這一轉型中保持一致非常關鍵，而不是讓它變成一個在角落裡默默發展的邊緣業務，這是我們看到過的情形。

當然，對於銷售組織、特別是收入功能來說，最初很多時間都是用來親自參與，進行銷售工作，也就是參與到早期的交易中，了解出現了哪些異議，這是產品問題需要在路線圖中解決，還是啟用問題、定位或消息傳遞問題，或是定價問題。所以我們的思維方式就是，我們的團隊、產品團隊，在推出這些新產品時，會與銷售人員和SA並肩作戰，參與每一個早期交易。我記得當時在我們紐約的小辦公室，我每晚都會巡視，問「這個交易怎麼樣？你需要什麼幫助？我們在哪裡？」這樣一來銷售團隊就會知道，並不是某個陌生人要求他們做些什麼，而是我和他們並肩作戰。

然後，當然你還得圍繞它來驅動激勳獎金（SPIFFs），強調啟用和檢查，並要求有責任，確保新的業務能夠逐漸建立起來，直到我們能夠中和它的影響。最終，我們還是基於客戶選擇，我們不會強迫本地部署的客戶轉向雲端，如果他們尚未準備好。這部分我們基本無法控制。但在最初，我們需要銷售團隊關注一些他們並不認為是關鍵業務的事情，直到我們獲得足夠的勢頭。

**Pat Grady**  是的，這很有趣。我聽到的教訓是，對任何正在經歷AI轉型的公司來說，最重要的是強有力的自上而下的支持，這需要對未來的方向有深刻的信念。完全整合，而不是將其視為一個在角落裡被忽視的項目，實際上它應該是業務的核心。還有，這是一個全面的轉型，並非只是一個SKU，而是整個業務的徹底重構。

**Sahir Azam**  沒錯。而且其中最重要的部分並不是技術決策，而是，這是業務模式的轉型，是銷售團隊如何去賣給不同的買家群體，這些買家群體在公司內部與我們傳統的目標客戶不同。所以幾乎每一個部門都要在相當根本的層面上進行變革。我認為有時我們過度關注那些技術層面的難題，卻忽視了那些可能會讓我們更多時間去處理的事情——而這些事情並不是我們最初認為需要改變的部分，或者是我們覺得最難的部分，像是如何提供一個高可靠性的雲端數據庫。這部分當然不容易，但通常大家更關注的是這部分。然而，更重要的是那些圍繞業務運營的其他方面，並確保所有這些功能能夠協同運作。

**Sonya Huang**  我也認為可以舉個比喻——告訴我這是不是我在空想，但在我們的對話中，你曾經強調過，在那段轉型期間，你真的專注於提升開發者體驗，而開發者將會選擇這種新運作模式的資料庫。我覺得對於現在正在經歷AI轉型的公司來說，現在仍然是開發者、開發者、開發者。正如你所說，開發者正在選擇AI工具。最終，如果我們有數兆個運行的代理，可能真正需要優先考慮的將是代理的體驗。

**Sahir Azam**  是的，尤其是如果代理是驅動大部分業務邏輯的話，並且組織內不一定會進行自定義開發，我可以理解這點。我經常從外界收到這樣的問題：Mongo是如何從企業轉型為PLG（產品驅動增長）？我每次聽到這個問題都會有些不適。你知道，我認為這些概念其實是互補的，更多的是取決於客戶的採用進程，或者是他們所屬的組織類型——無論是技術創始人主導、快速發展的創業公司，還是不希望在早期就與銷售部門接觸的大型企業。因此，我們花了很多時間以整體系統的方式思考，並試圖將其與用戶和買家希望如何與我們公司互動的方式對應起來。所以，我認為這也是我們雲端轉型成功背後的原因之一。並不是單純地說「信用卡業務客戶才是對的，企業銷售？那不行。」我的意思是，兩者都必須協同整合，才能觸及到我們現在這個階段的全球客戶。

# 閃電問答

**Sonya Huang**  我們來進行一些AI快速問答吧？

**Sahir Azam**  好的，聽起來不錯。

**Sonya Huang**  第一個問題：最喜歡的AI新應用？

**Sahir Azam**  好的，我提到過，我肯定是Gemini Deep Research的粉絲，所以我有提到過它。還有Perplexity對我來說，它們並不算是全新產品——但在我看來，它們顯示了與“薄AI”包裝不同的方向，因為我看到其中有很多產品設計。我知道Gemini當然有很深的模型訓練，但我覺得產品設計真的很有趣。像Perplexity，它如何讓用戶體驗變得更好，設計感非常棒，這對終端用戶來說非常棒。因此，我認為AI模型不會突然讓軟體消失。我認為有很多關於用戶採用和理解，擁有優秀的設計感的內容，即使未來我們轉向其他互動模式，也會出現這樣的版本，即使它不是視覺化的。所以我覺得這是其中一點。

對於對我來說比較新的產品？我不確定它是否很新，但上週有人向我介紹了Snipd。S-N-I-P-D。我是個大播客愛好者，它是一個很好的例子，展示了如何將AI非常好地融入用戶體驗。所以它會訂閱你的所有播客，自動摘要，將一些關鍵洞察以可讀或簡化的形式顯示出來。它還允許你做筆記。

**Sonya Huang**  我們需要這個，我們一直在尋找。

**Sahir Azam**  它超酷的，對，我上週才知道這個，我現在愛上了學習如何好好使用它。

**Pat Grady**  喜歡！那麼，在AI領域，你最崇拜的人是誰？

**Sahir Azam**  這個問題有點難。當然，我認為那些能看到未來的研究者，並且可能能預見事情真正走向何方的那些人，每次聽他們在播客中的分享或讀他們的文章，我都會對未來感到非常興奮。這些名字應該是大家都知道的。還有，聽那些大公司的CEO在爭論他們的應用到底只是記錄系統，還是誰能在代理競爭中獲勝等問題時，我覺得這非常有趣。所以，看到這些巨頭之間的爭鬥，看看誰能在未來的競爭中生存並蓬勃發展，與那些可能無法順利轉型的公司相比，我覺得這非常有意思。所以，沒提名字，但我會說這是我經常關注的兩個領袖群體。

**Pat Grady**  公正。

**Sonya Huang**  好的，這個問題：你同意還是不同意？每個開發者都會變成AI工程師。

**Sahir Azam**  同意。你知道，傳統的機器學習通常是集中在ML或數據科學團隊中，並且應用於可能只能為少數用例提供價值的範疇。然而，我們看到的是，隨著生成性AI被整合到應用中，不論是新建應用還是現有應用，實際上是普通的全棧開發者或應用開發者負責這些工作。因此，將這項能力在組織內部進行民主化是我們正在努力的方向。所以，如果我要給個簡單的回答，我會同意。

**Sonya Huang**  太棒了。Sahir，非常感謝你今天加入我們。我覺得你有……

**Sahir Azam**  這真的很有趣。

**Sonya Huang**  你對AI如何改變不僅是資料庫，還有軟體和技術，還有我們與技術互動的方式，以及這如何影響資料庫市場的觀點，真是非常深刻。非常感謝你抽出時間來分享你的想法。

**Sahir Azam**  當然，非常感謝，也很高興能在這裡。我們將看看這些想法是否能保持有效，畢竟事情發展得太快了。

**Pat Grady**  很棒，謝謝。

