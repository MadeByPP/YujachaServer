# 명령어

{% hint style="info" %}
모든 명령은 한/영 관계없이 사용이 가능하다. 예를 들어 **/remove**의 경우 **/ㄱ드ㅐㅍㄷ** 로도 사용이 가능하다.
{% endhint %}

## 기본 <a href="#default" id="default"></a>

***

### /remove

자신 또는 팀이 건축한 건축물을 제거합니다.

### 텔레포트(/tpr, /tpa, /tpc)

러스트 특성 상 맵이 너무 큰 나머지 초반에 팀을 만나는데 한참 걸릴 수 있다. 텔레포트는 원하는 유저에게 즉시 이동할 수 있는 기능을 제공한다.

<table data-full-width="false"><thead><tr><th width="157">명령</th><th>설명</th></tr></thead><tbody><tr><td><code>/tpr 닉네임</code></td><td>&#x3C;닉네임>에게 텔레포트 요청</td></tr><tr><td><code>/tpa</code></td><td>텔레포트 요청 수락(팀이면 자동 수락)</td></tr><tr><td><code>/tpc</code></td><td>현재 진행중인 홈/텔레포트 또는 받은 요청을 즉시 취소</td></tr></tbody></table>

{% hint style="info" %}
**/block 닉네임** 명령으로 모르는 유저의 텔레포트 요청을 차단할 수 있다.
{% endhint %}

### /home

<table><thead><tr><th width="232.49999999999997">명령</th><th>설명</th></tr></thead><tbody><tr><td><code>/home 이름</code></td><td>&#x3C;이름> 홈으로 텔레포트</td></tr><tr><td><code>/home add 이름</code></td><td>&#x3C;이름> 홈 추가</td></tr><tr><td><code>/home remove 이름</code></td><td>&#x3C;이름> 홈 삭제</td></tr></tbody></table>

### /bgrade

<table><thead><tr><th width="143">명령</th><th>설명</th></tr></thead><tbody><tr><td><code>/bgrade 1</code></td><td>건축도면으로 건축 시 나무를 기본으로 사용</td></tr><tr><td><code>/bgrade 2</code></td><td>건축도면으로 건축 시 돌을 기본으로 사용</td></tr><tr><td><code>/bgrade 3</code></td><td>건축도면으로 건축 시 금속을 기본으로 사용</td></tr><tr><td><code>/bgrade 4</code></td><td>건축도면으로 건축 시 고품질 금속을 기본으로 사용</td></tr></tbody></table>

### /ad

자동으로 문 닫기를 활성화하거나 비활성화 하는데 사용한다.(토글)

### /shop

아이템 상점을 열 때 사용한다.

{% hint style="info" %}
1시간 플레이 시 상점[^1]에서 사용 가능한 5코인이 지급된다.

코인을 추가로 구매[^2] 할 수도 있다.
{% endhint %}

### /playtime

<table><thead><tr><th width="205.5">명령</th><th>설명</th></tr></thead><tbody><tr><td><code>/playtime 닉네임</code></td><td>&#x3C;닉네임>의 플레이 시간을 표시(생략하면 본인으로 간주)</td></tr><tr><td><code>/playtime top</code></td><td>상위 10명 플레이 시간 표시</td></tr></tbody></table>

### /voteday

밤 건너뛰기 투표 찬성

### /fs

용광로 자동분배를 켜거나 끈다.

<table><thead><tr><th width="124.5">명령</th><th>설명</th></tr></thead><tbody><tr><td><code>/fs on</code></td><td>용광로 자동분배 켜기</td></tr><tr><td><code>/fs off</code></td><td>용광로 자동분배 끄기</td></tr></tbody></table>

### /al

<table><thead><tr><th width="213.5">명령</th><th>설명</th></tr></thead><tbody><tr><td><code>/al code 비밀번호</code></td><td>도어락 비밀번호 설정</td></tr><tr><td><code>/al toggle</code></td><td>도어락 자동설치 토글</td></tr></tbody></table>

{% hint style="warning" %}
/al code 명령으로 비밀번호를 설정해야 작동한다.
{% endhint %}

### /autoauthui

건차/터렛/코드락 공유기능 UI 열기

### ~~/station~~(일시적으로 작동하지 않음)

\<URL주소>로부터 오디오를 불러와 붐박스에서 재생

```
/station URL주소
```

{% hint style="warning" %}
일반 URL주소로는 재생되지 않는다. [#boombox-url](tip.md#boombox-url "mention")팁 순서대로 mp3파일 URL을 따로추출해야 한다.
{% endhint %}

### /rank

이번 시즌 리더보드 보기

### /block

<닉네임> 유저 차단 (TP 요청 등)

```
/block 닉네임
```

### /outpost

아웃포스트로 텔레포트

{% hint style="info" %}
하루 30번 사용횟수 제한이 있다.
{% endhint %}

### /backpack

배율서버 특성 상 공식 서버보다 더 많은 자원이 수집되기 때문에 기본 인벤토리 외에 추가로 사용 가능한 공간을 만들어주는 명령이다. 총 12칸을 이용할 수 있다.

<table><thead><tr><th width="173.5">명령</th><th>설명</th></tr></thead><tbody><tr><td><code>/backpack</code></td><td>백팩 열기</td></tr><tr><td><code>/backpackgui</code></td><td>인벤토리 벨트 맨 오른쪽에 표시되는 백팩 아이콘 토글</td></tr></tbody></table>

{% hint style="warning" %}
사망시 백팩의 아이템도 떨어뜨린다.
{% endhint %}

### /rjrewards

점검 후 30분 이내에 접속 시 보상을 받을 수 있다.

<table><thead><tr><th width="369.5">보상</th><th data-type="number">개수</th><th>내구도</th></tr></thead><tbody><tr><td>Assaurt Rifle ( AK-47 돌격 소총)</td><td>1</td><td>30%</td></tr><tr><td>5.56 Rifle Ammo (5.56mm 소총탄)</td><td>60</td><td></td></tr></tbody></table>

## 서포터 <a href="#supporter" id="supporter"></a>

***

서포터 명령은 Tebex[^3]를 참고하십시오.

{% hint style="info" %}
데이터의 일관성을 보장하기 위해 문서에 직접 제공되지 않는다.
{% endhint %}

[^1]: 인 게임, **/shop**

[^2]: [외부 링크](https://yujachaserversupport.tebex.io/package/6022494)

[^3]: [외부 링크](https://yujachaserversupport.tebex.io/)
