"use strict";
(self["webpackChunkchitter"] = self["webpackChunkchitter"] || []).push([
  [156],
  {
    9843: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return ee;
          },
        });
      var t = s(3396),
        r = s(4870),
        l = s(7139),
        i = s(8341),
        n = s(1319),
        o = s(8881),
        c = s(1172),
        p = s(9327),
        u = s(988);
      const w = (e) => (
          (0, t.dD)("data-v-551aad7f"), (e = e()), (0, t.Cn)(), e
        ),
        d = { class: "profile-container" },
        f = { class: "user-info-container" },
        m = { class: "avatar-wrapper" },
        k = { class: "user-info-wrapper" },
        g = { class: "display-name" },
        y = { class: "username-wrapper" },
        b = { class: "username gray-text" },
        _ = { key: 0, class: "follows-you gray-text" },
        U = { class: "description" },
        v = { class: "misc-info-wrapper" },
        h = { key: 0, class: "misc-info gray-text" },
        D = { class: "misc-icon" },
        T = { key: 1, class: "misc-info gray-text" },
        C = { class: "misc-icon" },
        x = ["href"],
        S = { key: 2, class: "misc-info gray-text" },
        q = { class: "misc-icon" },
        F = { key: 3, class: "misc-info gray-text" },
        z = { class: "misc-icon" },
        W = { class: "follow-metric-wrapper" },
        I = w(() =>
          (0, t._)("span", { class: "follow gray-text" }, " Following", -1)
        ),
        M = w(() =>
          (0, t._)("span", { class: "follow gray-text" }, " Followers", -1)
        ),
        Z = { class: "profile-tab-container" },
        j = { class: "tab-wrapper" },
        B = { key: 0, class: "tab-indicator" },
        P = { class: "tab-wrapper" },
        J = { key: 0, class: "tab-indicator" },
        E = { class: "tab-wrapper" },
        H = { key: 0, class: "tab-indicator" },
        L = { class: "tab-wrapper" },
        O = { key: 0, class: "tab-indicator" };
      var $ = {
          __name: "ProfileBio",
          props: { user: Object, tab: String, setTab: Function },
          setup(e) {
            const a = e,
              s = (0, p.q)(),
              w = (0, u.U)(),
              $ = (0, t.Fl)(() =>
                a.user.website
                  .replace(/https?:\/\/(www\.)?/gi, "")
                  .replace(/\/+$/, "")
              ),
              A = (0, t.Fl)(() => c.Z.formatJoinDate(a.user.timestamp)),
              G = () => {
                s.setModalType("edit-profile"), s.toggleModal();
              };
            return (c, p) => {
              const u = (0, t.up)("v-icon"),
                K = (0, t.up)("router-link");
              return (
                (0, t.wg)(),
                (0, t.iD)("div", d, [
                  (0, t.Wm)(n.Z, { url: a.user.headerUrl }, null, 8, ["url"]),
                  (0, t._)("div", f, [
                    (0, t._)("div", m, [
                      (0, t.Wm)(
                        i.Z,
                        { url: a.user.avatarUrl, size: 135 },
                        null,
                        8,
                        ["url"]
                      ),
                      (0, r.SU)(s).currentId == a.user.id
                        ? ((0, t.wg)(),
                          (0, t.iD)(
                            "button",
                            { key: 0, class: "edit-profile-btn", onClick: G },
                            " Edit Profile "
                          ))
                        : (0, r.SU)(s).currentUser
                        ? ((0, t.wg)(),
                          (0, t.j4)(
                            o.Z,
                            { key: 1, userId: a.user.id },
                            null,
                            8,
                            ["userId"]
                          ))
                        : (0, t.kq)("", !0),
                    ]),
                    (0, t._)("div", k, [
                      (0, t._)("span", g, (0, l.zw)(a.user.name), 1),
                      (0, t._)("span", y, [
                        (0, t._)(
                          "span",
                          b,
                          " @" + (0, l.zw)(a.user.username),
                          1
                        ),
                        (0, r.SU)(s).currentId &&
                        (0, r.SU)(w).isFollowingUser(
                          a.user.id,
                          (0, r.SU)(s).currentId
                        )
                          ? ((0, t.wg)(), (0, t.iD)("div", _, " Follows you "))
                          : (0, t.kq)("", !0),
                      ]),
                    ]),
                    (0, t._)("span", U, (0, l.zw)(a.user.description), 1),
                    (0, t._)("span", v, [
                      a.user.location
                        ? ((0, t.wg)(),
                          (0, t.iD)("span", h, [
                            (0, t._)("span", D, [
                              (0, t.Wm)(u, {
                                name: "md-locationon-outlined",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                            ]),
                            (0, t.Uk)((0, l.zw)(a.user.location), 1),
                          ]))
                        : (0, t.kq)("", !0),
                      a.user.website
                        ? ((0, t.wg)(),
                          (0, t.iD)("span", T, [
                            (0, t._)("span", C, [
                              (0, t.Wm)(u, {
                                name: "oi-link",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                            ]),
                            (0, t._)(
                              "a",
                              { class: "blue-link", href: a.user.website },
                              (0, l.zw)((0, r.SU)($)),
                              9,
                              x
                            ),
                          ]))
                        : (0, t.kq)("", !0),
                      a.user.birthday.length > 1
                        ? ((0, t.wg)(),
                          (0, t.iD)("span", S, [
                            (0, t._)("span", q, [
                              (0, t.Wm)(u, {
                                name: "la-birthday-cake-solid",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                            ]),
                            (0, t.Uk)((0, l.zw)(a.user.birthday), 1),
                          ]))
                        : (0, t.kq)("", !0),
                      (0, r.SU)(A)
                        ? ((0, t.wg)(),
                          (0, t.iD)("span", F, [
                            (0, t._)("span", z, [
                              (0, t.Wm)(u, {
                                name: "bi-calendar3",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                            ]),
                            (0, t.Uk)("Joined " + (0, l.zw)((0, r.SU)(A)), 1),
                          ]))
                        : (0, t.kq)("", !0),
                    ]),
                    (0, t._)("span", W, [
                      (0, t.Wm)(
                        K,
                        {
                          class: "follow-metric",
                          to: {
                            name: "Following",
                            params: { username: a.user.username },
                          },
                        },
                        {
                          default: (0, t.w5)(() => [
                            (0, t._)(
                              "strong",
                              null,
                              (0, l.zw)(a.user.followingCount),
                              1
                            ),
                            I,
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ),
                      (0, t.Wm)(
                        K,
                        {
                          class: "follow-metric",
                          to: {
                            name: "Followers",
                            params: { username: a.user.username },
                          },
                        },
                        {
                          default: (0, t.w5)(() => [
                            (0, t._)(
                              "strong",
                              null,
                              (0, l.zw)(a.user.followerCount),
                              1
                            ),
                            M,
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ),
                    ]),
                  ]),
                  (0, t._)("div", Z, [
                    (0, t._)(
                      "span",
                      {
                        class: (0, l.C_)([
                          "profile-tab",
                          { "gray-text": "tweets" !== a.tab },
                        ]),
                        onClick: p[0] || (p[0] = (a) => e.setTab("tweets")),
                      },
                      [
                        (0, t._)("span", j, [
                          (0, t.Uk)("Tweets "),
                          "tweets" === a.tab
                            ? ((0, t.wg)(), (0, t.iD)("span", B))
                            : (0, t.kq)("", !0),
                        ]),
                      ],
                      2
                    ),
                    (0, t._)(
                      "span",
                      {
                        class: (0, l.C_)([
                          "profile-tab",
                          { "gray-text": "tweets-and-replies" !== a.tab },
                        ]),
                        onClick:
                          p[1] ||
                          (p[1] = (a) => e.setTab("tweets-and-replies")),
                      },
                      [
                        (0, t._)("span", P, [
                          (0, t.Uk)("Tweets & replies "),
                          "tweets-and-replies" === a.tab
                            ? ((0, t.wg)(), (0, t.iD)("span", J))
                            : (0, t.kq)("", !0),
                        ]),
                      ],
                      2
                    ),
                    (0, t._)(
                      "span",
                      {
                        class: (0, l.C_)([
                          "profile-tab",
                          { "gray-text": "media" !== a.tab },
                        ]),
                        onClick: p[2] || (p[2] = (a) => e.setTab("media")),
                      },
                      [
                        (0, t._)("span", E, [
                          (0, t.Uk)("Media "),
                          "media" === a.tab
                            ? ((0, t.wg)(), (0, t.iD)("span", H))
                            : (0, t.kq)("", !0),
                        ]),
                      ],
                      2
                    ),
                    (0, t._)(
                      "span",
                      {
                        class: (0, l.C_)([
                          "profile-tab",
                          { "gray-text": "likes" !== a.tab },
                        ]),
                        onClick: p[3] || (p[3] = (a) => e.setTab("likes")),
                      },
                      [
                        (0, t._)("span", L, [
                          (0, t.Uk)("Likes "),
                          "likes" === a.tab
                            ? ((0, t.wg)(), (0, t.iD)("span", O))
                            : (0, t.kq)("", !0),
                        ]),
                      ],
                      2
                    ),
                  ]),
                ])
              );
            };
          },
        },
        A = s(89);
      const G = (0, A.Z)($, [["__scopeId", "data-v-551aad7f"]]);
      var K = G,
        N = s(8927),
        Q = s(7925);
      const R = { class: "profile-wrapper" },
        V = { key: 2, class: "error gray-text" };
      var X = {
        __name: "ProfileMain",
        props: ["username"],
        setup(e) {
          const a = e,
            s = (0, Q.g)(),
            l = (0, u.U)(),
            i = (0, t.Fl)(() => l.getUserByUsername(a.username)),
            n = (0, r.iH)("tweets"),
            o = (e) => {
              n.value = e;
            },
            c = () =>
              i.value.tweets.map((e) => ({
                data: s.getTweet(e.id),
                type: e.type,
                retweetedBy: null,
                containsMedia: e.containsMedia,
                timestamp: s.getTweet(e.id).timestamp,
              })),
            p = () =>
              i.value.retweets.map((e) => ({
                data: s.getTweet(e.id),
                type: "retweet",
                retweetedBy: i.value.name,
                timestamp: e.timestamp,
              })),
            w = () => i.value.likes.map((e) => ({ data: s.getTweet(e) })),
            d = (0, t.Fl)(() => {
              switch (n.value) {
                case "tweets-and-replies":
                  return c().filter(
                    (e) => "status" === e.type || "reply" === e.type
                  );
                case "media":
                  return c().filter((e) => e.containsMedia);
                case "likes":
                  return w();
                default:
                  return c()
                    .filter(
                      (e) =>
                        "status" === e.type ||
                        ("reply" === e.type &&
                          e.data.replyingToUser == e.data.authorId)
                    )
                    .concat(p())
                    .sort((e, a) =>
                      e.timestamp > a.timestamp
                        ? -1
                        : e.timestamp < a.timestamp
                        ? 1
                        : 0
                    );
              }
            });
          return (e, a) => (
            (0, t.wg)(),
            (0, t.iD)("div", R, [
              (0, r.SU)(i)
                ? ((0, t.wg)(),
                  (0, t.j4)(
                    K,
                    { key: 0, user: (0, r.SU)(i), tab: n.value, setTab: o },
                    null,
                    8,
                    ["user", "tab"]
                  ))
                : (0, t.kq)("", !0),
              (0, r.SU)(i)
                ? ((0, t.wg)(),
                  (0, t.j4)(N.Z, { key: 1, tweets: (0, r.SU)(d) }, null, 8, [
                    "tweets",
                  ]))
                : ((0, t.wg)(), (0, t.iD)("div", V, "User not found.")),
            ])
          );
        },
      };
      const Y = X;
      var ee = Y;
    },
  },
]);
//# sourceMappingURL=156.43692483.js.map