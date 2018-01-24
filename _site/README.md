# bigpearl

**Powered by**

- [Jekyll](https://jekyllrb.com)
- [FontAwesome](http://fontawesome.io/icon)
- [Materialize](http://materializecss.com)
- jQuery



**How to Run**

1. 터미널을 켠다.
2. 원하는 디렉토리로 가, `git clone https://github.com/jyoonsong/bigpearl.git` 한다.
3. 해당 디렉토리로 간다: `cd bigpearl`
4. `bundle` 또는 `bundle install`
5. `jekyll serve` 를 한 후, 로컬 주소로 들어가면 됨. (아마도 localhost:4000)



**Site Structure**

- 비회원 - `_layouts/nonmember.html`
  - 랜딩 - /
  - 인플루언서 가입 - /signup/vlogger
  - 광고주 가입 - /signup/advertiser
  - 로그인 - /signin
- 광고주회원 - `_layouts/advertiser.html`
  - 의뢰하기 - /request
  - 의뢰현황 - /status
- 브이로거회원 - `_layouts/vlogger.html`
  - 내 브이로그 프로필 - /profile
  - 브이로그 수익화 방법 - /help 