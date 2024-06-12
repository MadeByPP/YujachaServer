---
description: 공식 서버와 다른 점. 또는 유자차 서버만의 특징. 유자차 서버에 적용된 111개의 플러그인을 기반으로 작성되었다.
---

# 특징

## 접속 요구사항 <a href="#connection-requirements" id="connection-requirements"></a>

***

접속국가[^1]를 제외하고 공식 서버와 동일한 [접속 요구사항](#user-content-fn-2)[^2]을 채택하고 있다.

{% hint style="info" %}
러스트 [게임밴](https://namu.wiki/w/EasyAntiCheat#s-2)이 아닌 타사 게임밴의 경우 [#undefined-6](faq.md#undefined-6 "mention")따르면 접속이 가능하다. 그러나 [VAC밴](https://namu.wiki/w/%EB%B0%B8%EB%B8%8C%20%EC%95%88%ED%8B%B0%20%EC%B9%98%ED%8A%B8)의 경우 얄짤없이 접속이 불가능하니 주의해야 한다.
{% endhint %}

## 배율/배속 <a href="#scale-speed" id="scale-speed"></a>

***

[스택 사이즈](#user-content-fn-3)[^3] 1000배율, 자원 30배율, 컨베이어 30배율, 용광로 30배율, 스크랩 10배율, 컴포 5배율, 전기생산 2배율, 건물체력 2배율, 밤 3배속, 보급낙하속도 2배속, 믹싱 테이블 2배속으로 설정되어 있다.

{% hint style="warning" %}
채석장은 배율에서 제외되고 유황은 자원배율과 별도로 10배이다.
{% endhint %}

## 맵 <a href="#map" id="map"></a>

***

편의성을위해 [약탈자 야영지(Bandit Camp)](https://namu.wiki/w/%EB%9F%AC%EC%8A%A4%ED%8A%B8\(%EA%B2%8C%EC%9E%84\)/%EC%A7%80%EC%97%AD#s-5.2)가 [전초 기지(Outpost)](https://namu.wiki/w/%EB%9F%AC%EC%8A%A4%ED%8A%B8\(%EA%B2%8C%EC%9E%84\)/%EC%A7%80%EC%97%AD#s-5.1)와 통합되어 헬기 구매 등 약탈자 야영지(Bandit Camp)에서 할 수 있는 것을 전초 기지(Outpost) 에서도 할 수 있다.

## 맵 이름 <a href="#map-name" id="map-name"></a>

***

맵 이름이 **초기화 일자 | 서버 버전** 으로 표시된다. 초기화 일자의 경우 Full Wiped와 Map Wiped가 있다.   서버 버전의 경우 러스트 서버 버전이 아닌 유자차 서버의 자체 버전으로, [시멘틱 버전관리](https://semver.org/lang/ko/)를 사용한다.

{% hint style="info" %}
예전에는 초기화 일자와 서버 버전을 서버제목에 표기하여 초기화 때마다 [Rust+](https://rust.facepunch.com/companion)를 재연동해야하는 불편함이 있었지만 Rust가 구축해놓은 생태계에 불편함을 주는 요소를 제거하기 위해 현재와 같이 개선되었다.
{% endhint %}

## 지대공 미사일(SAM Site)

***

공식 서버에서는 어떤 비행체든(심지어 건차권한이 있어도) 공격하지만, 유저의 편의를 위해 건차권한이 있다면 공격하지 않게 되어있다.

## 기본지급 아이템 <a href="#basic-item" id="basic-item"></a>

***

[아이스픽](https://rustlabs.com/item/salvaged-icepick), [손도끼](https://rustlabs.com/item/hatchet), 횃불을 기본 아이템으로 지급한다. 러스트가 진행하는 이벤트에서 아이템을 추가로 지급할 때도 있다.

## 금지된 아이템 <a href="#banned-item" id="banned-item"></a>

***

서버 사정으로 인해 몇 가지 금지된 아이템이 존재한다.

1. 곰덫(Snap Trap). [금지 사유](https://discord.com/channels/878836708379090944/944661910945669140/996207547361022033)
2. 수제 지뢰(Homemade Landmine). [금지 사유](https://discord.com/channels/878836708379090944/944661910945669140/996207547361022033)
3. 작은 주머니(Small Stash). [금지 사유](https://discord.com/channels/878836708379090944/1094513654101196911/1230646549462122567)

## 금지된 건설 <a href="#banned-construction" id="banned-construction"></a>

***

수중 건설.  수중 건설로 맵 밖에 아이템을 은닉하고 있다는 소식을 보고받아 정지되었다.

## 이동수단 부식 <a href="#vehicle-decay" id="vehicle-decay"></a>

***

공식 서버에서는 집 안 판정이 나도 조금씩 부식되지만 유자차 서버의 경우 건차 권한 안에만 있다면 이동수단이 부식되지 않는다.

## 레벨 <a href="#level" id="level"></a>

***

레벨당 20%씩 획득량이 증가한다. 기본 적용된 배율에서 계산하므로 유황의 경우 기본 3000개에서 1레벨업 시 3600개를 획득한다. 2레벨의 경우 4200개.

{% hint style="info" %}
최대 200레벨까지 레벨업 할 수 있다.
{% endhint %}

## 깡통 자동수집 <a href="#barrel-automatic-collection" id="barrel-automatic-collection"></a>

***

깡통을 깨고 아이템을 일일히 수집하지 않아도, 가까이 있다면 자동으로 수집해준다. ~~E키 수명연장 성공!~~

## 건물 작업대 <a href="#building-workbench" id="building-workbench"></a>

***

건차[^4] 권한이 있다면 작업대 근처에 가지 않아도 건차범위 내에서 작업대를 사용할 수 있다.

## 제작시간 <a href="#production-time" id="production-time"></a>

***

모든 아이템이 즉시제작된다.

## 자판기 <a href="#vending-machine" id="vending-machine"></a>

***

스크랩을 파밍하도록 유도하려는 노력의 일환으로 스크랩을 얻기위해 사용해야 하는 재료에 배율이 적용된 경우 재료가 배율이 적용된 만큼 더 필요하다. 또, 많은 자원을 교환해야 하기 때문에 자판기는 품절되지 않고, 원하는 수량만큼 사갈 수 있도록 되어있다. ([일부 아이템](#user-content-fn-5)[^5] 제외)

## 용광로 자동분배 <a href="#furnace-splitter" id="furnace-splitter"></a>

***

용광로 안에 있는 아이템을 자동으로 분리해주고 광물이 다 구워지려면 나무가 얼마나 필요한지 계산해 자동으로 연료를 넣어준다. ~~그리 정확하진 않지만 쓸만하다.~~ 러스트 [용광로 UI 업데이트](https://rust.facepunch.com/news/the-lumberjack) 이후 쓸모 없다고 생각할 수도 있겠지만 자동 연료 계산기능 때문에 사용하고 있다.

## 칭호 <a href="#style" id="style"></a>

***

\[흑차] : 1600시간 이상 플레이 시 지급

\[백차] : 800시간 이상 플레이 시 지급

\[방사능 홍차] : 400시간 이상 플레이 시 지급

\[보리차] : 200시간 이상 플레이 시 지급

\[녹차] : 100시간 이상 플레이 시 지급

\[유자차] : 1시간 이상 플레이 시 지급

## 비밀번호 자물쇠(Code Lock) 레이드 <a href="#anti-code-lock-raid" id="anti-code-lock-raid"></a>

***

건설 권한이 없다면 비밀번호 자물쇠에 코드를 대입할 수 없다. 즉, 무작위 대입을 통해 비밀번호를 알아내는 것은 불가능하다.

## 레이드 블록(Raid Block)

***

레이드 블록은 집을 때리거나 집이 공격당하면 발생한다. 이 동안에는 전투 공정성 및 도주 예방을 위해 tp 및 [일부 편의 기능](#user-content-fn-6)[^6]을 사용할 수 없다.

## 초기화 일시 <a href="#wipe-schedule" id="wipe-schedule"></a>

***

* 전체 : 강제 초기화일(주로 첫째 주 금요일) 07:00
* 맵 및 레벨 : 강제 초기화일 2주 후 금요일 07:00

## 엔티티 제한 <a href="#entity-limit" id="entity-limit"></a>

***

1인당 설치 가능한 엔티티의 개수가 1만 5천개로 제한되어 있다. Rust의 기술적 한계로 인해 레이드 시 한곳에 엔티티가 집중될 경우 레이드 반경에 있는 모든 유저들의 접속에 장애가 생길 수 있는 문제가 보고되었기 때문이다.

{% hint style="info" %}
Rust는 지난 10년간 꾸준히 월간 업데이트를 출시하고 있기 때문에 이 문제는 향후 해결될 가능성이 있다. ~~10년간 고쳐지지 않은 문제일지도..~~
{% endhint %}

## 엔티티 정리 <a href="#entity-cleanup" id="entity-cleanup"></a>

***

[#scale-speed](feature.md#scale-speed "mention")을 고려해 엔티티의 부식 속도가 4배속이다. 이는 서버에도 클라이언트에게도 좋은 조치로서, 서버의 경우 엔티티를 빨리 부식시켜 서버 자원을 절약할 수 있고 클라이언트의 경우 큰 건물이 빨리 사라져 해당 지역에서의 프레임 드랍을 덜 경험하고 흉물스러운 건물을 보지 않아도 된다.

[^1]: KR, JP만 접속 가능

[^2]: VAC 밴 및 러스트 게임밴이 하나라도 있는 경우 접속이 불가능하다

[^3]: 얼마나 겹칠 수 있는지를 말한다. 예를 들어 공식 서버의 경우 나무를 1000개 겹칠 수 있다.

[^4]: TC, 도구함이라고도 불린다.

[^5]: 스택이 없는 아이템과 같은 경우

[^6]: 전투에 영향을 주는 기능들
