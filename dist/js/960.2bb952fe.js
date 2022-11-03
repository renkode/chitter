"use strict";
(self["webpackChunkchitter"] = self["webpackChunkchitter"] || []).push([
  [960],
  {
    6960: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return ce;
          },
        });
      s(541);
      var l = s(3396),
        i = s(4870),
        a = s(2664),
        n = s(7139),
        r = s(9242),
        o = s(8341),
        c = s(116),
        w = s(1172),
        u = s(9707),
        d = s(7925),
        p = s(9327),
        f = s(988);
      const m = (e) => (
          (0, l.dD)("data-v-d44c1dee"), (e = e()), (0, l.Cn)(), e
        ),
        g = { key: 0, class: "user-retweet gray-text" },
        k = { class: "tweet-body" },
        v = { class: "profile-pic-and-user" },
        y = { class: "profile-pic-container" },
        U = { class: "tweet-data" },
        _ = { class: "user-info-and-btn" },
        C = { class: "user-info-wrapper" },
        S = ["onClick"],
        T = { key: 0, class: "overlay" },
        h = { key: 1, class: "tweet-menu-container" },
        x = { class: "tweet-menu-list" },
        b = { class: "tweet-menu-icon" },
        D = { class: "tweet-menu-icon" },
        M = { class: "tweet-menu-icon" },
        I = m(() => (0, l._)("button", { class: "cancel-btn" }, "Cancel", -1)),
        q = { class: "tweet-content" },
        z = { key: 0, class: "replying-to" },
        W = m(() =>
          (0, l._)("span", { class: "gray-text" }, "Replying to ", -1)
        ),
        R = { class: "tweet-text" },
        P = ["src"],
        F = { class: "date-and-time" },
        Z = { class: "tweet-time gray-text" },
        H = m(() =>
          (0, l._)("span", { class: "separator gray-text" }, "·", -1)
        ),
        B = { class: "tweet-time gray-text" },
        L = { key: 0, class: "tweet-metrics-wrapper" },
        $ = m(() => (0, l._)("span", { class: "gray-text" }, " Retweets", -1)),
        j = m(() => (0, l._)("span", { class: "gray-text" }, " Likes", -1)),
        Y = { class: "tweet-actions-wrapper" },
        O = { class: "tweet-action-container" },
        E = ["onClick"],
        A = { class: "tweet-action-container" },
        K = ["onClick"],
        N = { class: "tweet-action-container" },
        V = ["onClick"],
        G = { class: "tweet-action-container" },
        J = ["onClick"];
      var Q = {
          __name: "TweetCardFull",
          props: {
            id: String,
            user: Object,
            tweet: Object,
            type: String,
            replyingTo: String,
            isRetweetedBy: String,
          },
          setup(e) {
            const t = e,
              s = (0, d.g)(),
              a = (0, p.q)(),
              m = (0, f.U)(),
              Q = (0, i.iH)(!1),
              X = (0, i.iH)(null),
              ee = (0, l.Fl)(() => s.hasLiked(t.tweet.id, a.currentId)),
              te = (0, l.Fl)(() => s.hasRetweeted(t.tweet.id, a.currentId)),
              se = (e) => {
                a.setModalType(e), a.toggleModal();
              },
              le = () => {
                Q.value = !Q.value;
              },
              ie = () => {
                a.routeTweetId == t.id
                  ? t.tweet.replyingToTweet &&
                    a.setTweetContext(t.tweet.replyingToTweet)
                  : a.setTweetContext(null),
                  s.removeTweet(t.id, t.user.id);
              },
              ae = () => {
                ee.value
                  ? s.removeLike(t.id, a.currentId)
                  : s.addLike(t.id, a.currentId, t.retweetedBy);
              },
              ne = () => {
                te.value
                  ? s.removeRetweet(t.id, a.currentId)
                  : s.addRetweet(t.id, a.currentId, t.retweetedBy);
              },
              re = () => {
                a.setModalType("reply"),
                  a.setModalReply(t.user.id, t.id),
                  a.toggleModal();
              },
              oe = () => {
                a.toast("Copied to clipboard"),
                  navigator.clipboard.writeText(
                    `${window.location.host}/status/${t.id}`
                  );
              };
            return (e, s) => {
              const d = (0, l.up)("v-icon");
              return (
                (0, l.wg)(),
                (0, l.iD)(
                  "div",
                  {
                    class: "tweet-container",
                    ref_key: "tweetContainer",
                    ref: X,
                  },
                  [
                    "retweet" === t.type && t.retweetedBy
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", g, [
                          (0, l.Wm)(d, {
                            name: "la-retweet-solid",
                            scale: "0.89",
                            fill: "#ffffff80",
                          }),
                          (0, l.Uk)(
                            " " + (0, n.zw)(t.retweetedBy) + " Retweeted ",
                            1
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                    (0, l._)("div", k, [
                      (0, l._)("div", v, [
                        (0, l._)("div", y, [
                          (0, l.Wm)(
                            o.Z,
                            {
                              url: t.user.avatarUrl,
                              size: 48,
                              onClick:
                                s[0] ||
                                (s[0] = (0, r.iM)(
                                  (e) =>
                                    (0, i.SU)(a).viewUserProfile(
                                      t.user.username
                                    ),
                                  ["stop"]
                                )),
                            },
                            null,
                            8,
                            ["url"]
                          ),
                        ]),
                        (0, l._)("div", U, [
                          (0, l._)("div", _, [
                            (0, l._)("div", C, [
                              (0, l._)(
                                "span",
                                {
                                  class: "display-name",
                                  onClick:
                                    s[1] ||
                                    (s[1] = (0, r.iM)(
                                      (e) =>
                                        (0, i.SU)(a).viewUserProfile(
                                          t.user.username
                                        ),
                                      ["stop"]
                                    )),
                                },
                                [(0, l._)("a", null, (0, n.zw)(t.user.name), 1)]
                              ),
                              (0, l._)(
                                "span",
                                {
                                  class: "username gray-text",
                                  onClick:
                                    s[2] ||
                                    (s[2] = (0, r.iM)(
                                      (e) =>
                                        (0, i.SU)(a).viewUserProfile(
                                          t.user.username
                                        ),
                                      ["stop"]
                                    )),
                                },
                                [
                                  (0, l._)(
                                    "a",
                                    null,
                                    "@" + (0, n.zw)(t.user.username),
                                    1
                                  ),
                                ]
                              ),
                            ]),
                            (0, l._)(
                              "span",
                              {
                                class: "tweet-action-icon extra-btn",
                                onClick: (0, r.iM)(le, ["stop"]),
                              },
                              [
                                (0, l.Wm)(d, {
                                  name: "hi-dots-horizontal",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                                Q.value
                                  ? ((0, l.wg)(), (0, l.iD)("div", T))
                                  : (0, l.kq)("", !0),
                                Q.value
                                  ? ((0, l.wg)(),
                                    (0, l.iD)("div", h, [
                                      (0, l._)("ul", x, [
                                        (0, i.SU)(a).currentId == t.user.id ||
                                        (0, i.SU)(a).currentUser.isAdmin
                                          ? ((0, l.wg)(),
                                            (0, l.iD)(
                                              "li",
                                              {
                                                key: 0,
                                                class:
                                                  "tweet-menu-item delete-tweet",
                                                onClick: ie,
                                              },
                                              [
                                                (0, l._)("span", b, [
                                                  (0, l.Wm)(d, {
                                                    name: "bi-trash",
                                                    scale: "1.1",
                                                    fill: "red",
                                                  }),
                                                ]),
                                                (0, l.Uk)("Delete "),
                                              ]
                                            ))
                                          : (0, l.kq)("", !0),
                                        (0, i.SU)(m).canFollow(
                                          (0, i.SU)(a).currentUser,
                                          t.user.id
                                        )
                                          ? ((0, l.wg)(),
                                            (0, l.iD)(
                                              "li",
                                              {
                                                key: 1,
                                                class: "tweet-menu-item",
                                                onClick:
                                                  s[3] ||
                                                  (s[3] = (e) =>
                                                    (0, i.SU)(m).followUser(
                                                      (0, i.SU)(a).currentId,
                                                      t.user.id
                                                    )),
                                              },
                                              [
                                                (0, l._)("span", D, [
                                                  (0, l.Wm)(d, {
                                                    name: "co-user-follow",
                                                    scale: "1.1",
                                                    fill: "#ffffff80",
                                                  }),
                                                ]),
                                                (0, l.Uk)(
                                                  "Follow @" +
                                                    (0, n.zw)(t.user.username),
                                                  1
                                                ),
                                              ]
                                            ))
                                          : (0, l.kq)("", !0),
                                        (0, i.SU)(m).canUnfollow(
                                          (0, i.SU)(a).currentUser,
                                          t.user.id
                                        )
                                          ? ((0, l.wg)(),
                                            (0, l.iD)(
                                              "li",
                                              {
                                                key: 2,
                                                class: "tweet-menu-item",
                                                onClick:
                                                  s[4] ||
                                                  (s[4] = (e) =>
                                                    (0, i.SU)(m).unfollowUser(
                                                      (0, i.SU)(a).currentId,
                                                      t.user.id
                                                    )),
                                              },
                                              [
                                                (0, l._)("span", M, [
                                                  (0, l.Wm)(d, {
                                                    name: "co-user-unfollow",
                                                    scale: "1.1",
                                                    fill: "#ffffff80",
                                                  }),
                                                ]),
                                                (0, l.Uk)(
                                                  "Unfollow @" +
                                                    (0, n.zw)(t.user.username),
                                                  1
                                                ),
                                              ]
                                            ))
                                          : (0, l.kq)("", !0),
                                        I,
                                      ]),
                                    ]))
                                  : (0, l.kq)("", !0),
                              ],
                              8,
                              S
                            ),
                          ]),
                        ]),
                      ]),
                      (0, l._)("div", q, [
                        "reply" === t.tweet.type && t.tweet.replyingToTweet
                          ? ((0, l.wg)(),
                            (0, l.iD)("div", z, [
                              W,
                              (0, l._)(
                                "a",
                                {
                                  class: "blue-link",
                                  onClick:
                                    s[5] ||
                                    (s[5] = (0, r.iM)(
                                      (e) =>
                                        (0, i.SU)(a).viewUserProfile(
                                          t.replyingTo
                                        ),
                                      ["stop"]
                                    )),
                                },
                                "@" + (0, n.zw)(t.replyingTo),
                                1
                              ),
                            ]))
                          : (0, l.kq)("", !0),
                        (0, l._)("div", R, [
                          (0, l.Wm)(c.Z, { text: t.tweet.text }, null, 8, [
                            "text",
                          ]),
                        ]),
                        t.tweet.media.length > 0
                          ? ((0, l.wg)(),
                            (0, l.iD)(
                              "div",
                              {
                                key: 1,
                                class: (0, n.C_)([
                                  "tweet-media",
                                  [(0, i.SU)(u.YM)(t.tweet.media)],
                                ]),
                              },
                              [
                                ((0, l.wg)(!0),
                                (0, l.iD)(
                                  l.HY,
                                  null,
                                  (0, l.Ko)(
                                    t.tweet.media,
                                    (e) => (
                                      (0, l.wg)(),
                                      (0, l.iD)(
                                        "div",
                                        {
                                          class: "image-preview-wrapper",
                                          key: t.tweet.media.indexOf(e),
                                        },
                                        [
                                          (0, l._)(
                                            "img",
                                            { src: e },
                                            null,
                                            8,
                                            P
                                          ),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ],
                              2
                            ))
                          : (0, l.kq)("", !0),
                      ]),
                      (0, l._)("div", F, [
                        (0, l._)(
                          "span",
                          Z,
                          (0, n.zw)(
                            (0, i.SU)(w.Z).formatTime(t.tweet.timestamp)
                          ),
                          1
                        ),
                        H,
                        (0, l._)(
                          "span",
                          B,
                          (0, n.zw)(
                            (0, i.SU)(w.Z).formatFullDate(t.tweet.timestamp)
                          ),
                          1
                        ),
                      ]),
                      t.tweet.retweetCount > 0 || t.tweet.likeCount > 0
                        ? ((0, l.wg)(),
                          (0, l.iD)("div", L, [
                            t.tweet.retweetCount > 0
                              ? ((0, l.wg)(),
                                (0, l.iD)(
                                  "span",
                                  {
                                    key: 0,
                                    class: "tweet-metric",
                                    onClick:
                                      s[6] ||
                                      (s[6] = (e) => se("retweet-list")),
                                  },
                                  [
                                    (0, l._)(
                                      "strong",
                                      null,
                                      (0, n.zw)(t.tweet.retweetCount),
                                      1
                                    ),
                                    $,
                                  ]
                                ))
                              : (0, l.kq)("", !0),
                            t.tweet.likeCount > 0
                              ? ((0, l.wg)(),
                                (0, l.iD)(
                                  "span",
                                  {
                                    key: 1,
                                    class: "tweet-metric",
                                    onClick:
                                      s[7] || (s[7] = (e) => se("like-list")),
                                  },
                                  [
                                    (0, l._)(
                                      "strong",
                                      null,
                                      (0, n.zw)(t.tweet.likeCount),
                                      1
                                    ),
                                    j,
                                  ]
                                ))
                              : (0, l.kq)("", !0),
                          ]))
                        : (0, l.kq)("", !0),
                      (0, l._)("div", Y, [
                        (0, l._)("div", O, [
                          (0, l._)(
                            "span",
                            {
                              class: "tweet-action-icon reply-btn",
                              onClick: (0, r.iM)(re, ["stop"]),
                            },
                            [
                              (0, l.Wm)(d, {
                                name: "fa-regular-comment",
                                scale: "1.3",
                                fill: "#ffffff80",
                              }),
                            ],
                            8,
                            E
                          ),
                        ]),
                        (0, l._)("div", A, [
                          (0, l._)(
                            "span",
                            {
                              class: (0, n.C_)([
                                "tweet-action-icon retweet-btn",
                                { retweeted: (0, i.SU)(te) },
                              ]),
                              onClick: (0, r.iM)(ne, ["stop"]),
                            },
                            [
                              (0, l.Wm)(d, {
                                name: "la-retweet-solid",
                                scale: "1.45",
                                fill: "#ffffff80",
                              }),
                            ],
                            10,
                            K
                          ),
                        ]),
                        (0, l._)("div", N, [
                          (0, l._)(
                            "span",
                            {
                              class: (0, n.C_)([
                                "tweet-action-icon like-btn",
                                { liked: (0, i.SU)(ee) },
                              ]),
                              onClick: (0, r.iM)(ae, ["stop"]),
                            },
                            [
                              (0, l.Wm)(d, {
                                name: "fa-regular-heart",
                                scale: "1.3",
                                fill: "#ffffff80",
                              }),
                            ],
                            10,
                            V
                          ),
                        ]),
                        (0, l._)("div", G, [
                          (0, l._)(
                            "span",
                            {
                              class: "tweet-action-icon share-tweet-btn",
                              onClick: (0, r.iM)(oe, ["stop"]),
                            },
                            [
                              (0, l.Wm)(d, {
                                name: "gi-share",
                                scale: "1.3",
                                fill: "#ffffff80",
                              }),
                            ],
                            8,
                            J
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  512
                )
              );
            };
          },
        },
        X = s(89);
      const ee = (0, X.Z)(Q, [["__scopeId", "data-v-d44c1dee"]]);
      var te = ee;
      const se = (e) => (
          (0, l.dD)("data-v-34e32567"), (e = e()), (0, l.Cn)(), e
        ),
        le = { key: 0, class: "tweet-list-container" },
        ie = se(() =>
          (0, l._)(
            "div",
            { class: "deleted-tweet" },
            [
              (0, l._)(
                "span",
                { class: "gray-text" },
                "Tweet has been deleted."
              ),
            ],
            -1
          )
        ),
        ae = [ie],
        ne = { key: 1, class: "error gray-text" };
      var re = {
        __name: "TweetContext",
        props: ["id"],
        setup(e) {
          const t = e,
            s = (0, p.q)(),
            n = (0, f.U)(),
            r = (0, d.g)(),
            o = (0, l.Fl)(() => r.getTweet(t.id)),
            c = (0, l.Fl)(() =>
              o.value ? r.getTweet(o.value.replyingToTweet) : null
            ),
            w = (0, i.iH)([]),
            u = (0, l.Fl)(() =>
              o.value
                ? o.value.repliesFrom.map((e) => r.getTweet(e)) || []
                : null
            ),
            m = () => {
              if (((w.value = []), !o.value)) return;
              let e = o.value;
              while (e.replyingToTweet)
                try {
                  let t = r.getTweet(e.replyingToTweet);
                  if (!t) {
                    w.value.unshift(null);
                    break;
                  }
                  w.value.unshift(t), (e = t);
                } catch {
                  throw new Error("loop gone wild");
                }
            };
          return (
            (0, l.YP)([() => s.viewTweetId, c], () => {
              m();
            }),
            (0, l.bv)(() => {
              m();
            }),
            (e, t) =>
              (0, i.SU)(o)
                ? ((0, l.wg)(),
                  (0, l.iD)("div", le, [
                    ((0, l.wg)(!0),
                    (0, l.iD)(
                      l.HY,
                      null,
                      (0, l.Ko)(
                        w.value,
                        (e) => (
                          (0, l.wg)(),
                          (0, l.iD)(
                            l.HY,
                            null,
                            [
                              e
                                ? ((0, l.wg)(),
                                  (0, l.j4)(
                                    a.Z,
                                    {
                                      key: e.id,
                                      id: e.id,
                                      user: (0, i.SU)(n).getUser(e.authorId),
                                      tweet: e,
                                      type: e.type,
                                      replyingTo: (0, i.SU)(n).getUsername(
                                        e.replyingToUser
                                      ),
                                      isPreviousReply: !0,
                                    },
                                    null,
                                    8,
                                    [
                                      "id",
                                      "user",
                                      "tweet",
                                      "type",
                                      "replyingTo",
                                    ]
                                  ))
                                : ((0, l.wg)(),
                                  (0, l.iD)(
                                    "div",
                                    {
                                      class: "tweet-container",
                                      key: w.value.indexOf(e),
                                    },
                                    ae
                                  )),
                            ],
                            64
                          )
                        )
                      ),
                      256
                    )),
                    (0, i.SU)(o)
                      ? ((0, l.wg)(),
                        (0, l.j4)(
                          te,
                          {
                            key: 0,
                            id: (0, i.SU)(o).id,
                            user: (0, i.SU)(n).getUser((0, i.SU)(o).authorId),
                            tweet: (0, i.SU)(o),
                            type: (0, i.SU)(o).type,
                            replyingTo: (0, i.SU)(n).getUsername(
                              (0, i.SU)(o).replyingToUser
                            ),
                          },
                          null,
                          8,
                          ["id", "user", "tweet", "type", "replyingTo"]
                        ))
                      : (0, l.kq)("", !0),
                    (0, i.SU)(u) && (0, i.SU)(u).length > 0
                      ? ((0, l.wg)(!0),
                        (0, l.iD)(
                          l.HY,
                          { key: 1 },
                          (0, l.Ko)(
                            (0, i.SU)(u),
                            (e) => (
                              (0, l.wg)(),
                              (0, l.j4)(
                                a.Z,
                                {
                                  key: e.id,
                                  id: e.id,
                                  user: (0, i.SU)(n).getUser(e.authorId),
                                  tweet: e,
                                  type: e.type,
                                  replyingTo: (0, i.SU)(n).getUsername(
                                    e.replyingToUser
                                  ),
                                  isPreviousReply: !1,
                                },
                                null,
                                8,
                                ["id", "user", "tweet", "type", "replyingTo"]
                              )
                            )
                          ),
                          128
                        ))
                      : (0, l.kq)("", !0),
                  ]))
                : ((0, l.wg)(), (0, l.iD)("div", ne, "Tweet does not exist."))
          );
        },
      };
      const oe = (0, X.Z)(re, [["__scopeId", "data-v-34e32567"]]);
      var ce = oe;
    },
    116: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = s(3396),
        i = s(4870),
        a = s(9707),
        n = s(9327);
      const r = ["innerHTML"];
      var o = {
          __name: "EmbeddedText",
          props: ["text"],
          setup(e) {
            const t = e,
              s = (0, i.iH)(null),
              o = (0, n.q)(),
              c = (0, l.Fl)(() => {
                if (!t.text || 0 === t.text.length) return;
                const e = t.text.split(" ").map((e) => {
                  switch (!0) {
                    case a.yV.test(e):
                      return `<a class="blue-link" href="${e}" target="_blank">${e}</a>`;
                    case a.nC.test(e):
                      return `<a class="blue-link">${e}</a>`;
                    case a.PH.test(e.split(/\r?\n/)[0]):
                      return `<a class="blue-link user-link" data-username=${e.replace(
                        "@",
                        ""
                      )}>${e.split(/\r?\n/)[0]}</a>${
                        e.split(/\r?\n/).length > 1
                          ? "\n" + e.split(/\r?\n/).slice(1).join("\n")
                          : ""
                      }`;
                    default:
                      return e;
                  }
                });
                return e.join(" ");
              });
            return (
              (0, l.bv)(() => {
                const e = s.value.querySelectorAll(".user-link");
                Array.from(e).forEach((e) =>
                  e.addEventListener("click", function t(s) {
                    s.stopPropagation(),
                      o.viewUserProfile(e.dataset.username),
                      this.removeEventListener("click", t);
                  })
                );
              }),
              (0, l.YP)(s, () => {}),
              (e, t) => (
                (0, l.wg)(),
                (0, l.iD)(
                  "div",
                  { ref_key: "textEl", ref: s, innerHTML: (0, i.SU)(c) },
                  null,
                  8,
                  r
                )
              )
            );
          },
        },
        c = s(89);
      const w = (0, c.Z)(o, [["__scopeId", "data-v-17b9ce1e"]]);
      var u = w;
    },
    2664: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return J;
        },
      });
      var l = s(3396),
        i = s(7139),
        a = s(4870),
        n = s(9242),
        r = s(5743),
        o = s.n(r),
        c = s(8341),
        w = s(116),
        u = s(1172),
        d = s(9707),
        p = s(7925),
        f = s(9327),
        m = s(988);
      const g = { key: 0, class: "user-retweet gray-text" },
        k = { class: "tweet-body" },
        v = { class: "profile-pic-container" },
        y = { key: 0, class: "gray-line" },
        U = { class: "tweet-data" },
        _ = { class: "user-info-and-btn" },
        C = { class: "user-info-wrapper" },
        S = (0, l._)("span", { class: "separator gray-text" }, "·", -1),
        T = { class: "tweet-time gray-text" },
        h = ["onClick"],
        x = { key: 0, class: "overlay" },
        b = { key: 1, class: "tweet-menu-container" },
        D = { class: "tweet-menu-list" },
        M = { class: "tweet-menu-icon" },
        I = { class: "tweet-menu-icon" },
        q = { class: "tweet-menu-icon" },
        z = (0, l._)("button", { class: "cancel-btn" }, "Cancel", -1),
        W = { class: "tweet-content" },
        R = { key: 0, class: "replying-to" },
        P = (0, l._)("span", { class: "gray-text" }, "Replying to ", -1),
        F = { class: "tweet-text" },
        Z = ["src"],
        H = { class: "tweet-actions-wrapper" },
        B = { class: "tweet-metrics" },
        L = ["onClick"],
        $ = { class: "tweet-metric reply-metric gray-text" },
        j = { class: "tweet-metrics" },
        Y = ["onClick"],
        O = { class: "tweet-metric retweet-metric gray-text" },
        E = { class: "tweet-metrics" },
        A = ["onClick"],
        K = { class: "tweet-metric like-metric gray-text" },
        N = ["onClick"];
      var V = {
        __name: "TweetCard",
        props: {
          id: String,
          user: Object,
          tweet: Object,
          type: String,
          retweetedBy: String,
          replyingTo: String,
          isPreviousReply: Boolean,
          isNotification: Boolean,
        },
        setup(e) {
          const t = e,
            r = (0, p.g)(),
            V = (0, f.q)(),
            G = (0, m.U)();
          var J = s(893);
          o().extend(J);
          let Q = null;
          const X = (0, a.iH)(!1),
            ee = (0, a.iH)(o()().toISOString()),
            te = (0, a.iH)(u.Z.formatTweetDate(t.tweet.timestamp, ee.value)),
            se = (0, l.Fl)(() => r.hasLiked(t.tweet.id, V.currentId)),
            le = (0, l.Fl)(() => r.hasRetweeted(t.tweet.id, V.currentId)),
            ie = () => {
              X.value = !X.value;
            },
            ae = () => {
              r.removeTweet(t.id, t.user.id);
            },
            ne = () => {
              se.value
                ? r.removeLike(t.id, V.currentId)
                : r.addLike(t.id, V.currentId, t.retweetedBy);
            },
            re = () => {
              le.value
                ? r.removeRetweet(t.id, V.currentId)
                : r.addRetweet(t.id, V.currentId, t.retweetedBy);
            },
            oe = () => {
              V.setModalType("reply"),
                V.setModalReply(t.user.id, t.id),
                V.toggleModal();
            },
            ce = () => {
              V.toast("Copied to clipboard"),
                navigator.clipboard.writeText(
                  `${window.location.host}/status/${t.id}`
                );
            };
          return (
            (0, l.bv)(() => {
              o()(ee.value).diff(o()(t.tweet.timestamp), "hour") > 23 ||
                (Q = setInterval(() => {
                  te.value !==
                    u.Z.formatTweetDate(t.tweet.timestamp, ee.value) &&
                    (te.value = u.Z.formatTweetDate(
                      t.tweet.timestamp,
                      ee.value
                    ));
                }, 3e4));
            }),
            (0, l.Ah)(() => {
              clearInterval(Q);
            }),
            (s, r) => {
              const o = (0, l.up)("v-icon");
              return (
                (0, l.wg)(),
                (0, l.iD)(
                  "div",
                  {
                    class: (0, i.C_)([
                      "tweet-container",
                      { border: !e.isPreviousReply, new: e.isNotification },
                    ]),
                    onClick:
                      r[6] ||
                      (r[6] = (e) => (0, a.SU)(V).setTweetContext(t.id)),
                  },
                  [
                    "retweet" === t.type && t.retweetedBy
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", g, [
                          (0, l.Wm)(o, {
                            name: "la-retweet-solid",
                            scale: "0.89",
                            fill: "#ffffff80",
                          }),
                          (0, l.Uk)(
                            " " + (0, i.zw)(t.retweetedBy) + " Retweeted ",
                            1
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                    (0, l._)("div", k, [
                      (0, l._)("div", v, [
                        (0, l.Wm)(
                          c.Z,
                          {
                            url: t.user.avatarUrl,
                            size: 48,
                            onClick:
                              r[0] ||
                              (r[0] = (0, n.iM)(
                                (e) =>
                                  (0, a.SU)(V).viewUserProfile(t.user.username),
                                ["stop"]
                              )),
                          },
                          null,
                          8,
                          ["url"]
                        ),
                        e.isPreviousReply
                          ? ((0, l.wg)(), (0, l.iD)("div", y))
                          : (0, l.kq)("", !0),
                      ]),
                      (0, l._)("div", U, [
                        (0, l._)("div", _, [
                          (0, l._)("div", C, [
                            (0, l._)(
                              "span",
                              {
                                class: "display-name",
                                onClick:
                                  r[1] ||
                                  (r[1] = (0, n.iM)(
                                    (e) =>
                                      (0, a.SU)(V).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [(0, l._)("a", null, (0, i.zw)(t.user.name), 1)]
                            ),
                            (0, l._)(
                              "span",
                              {
                                class: "username gray-text",
                                onClick:
                                  r[2] ||
                                  (r[2] = (0, n.iM)(
                                    (e) =>
                                      (0, a.SU)(V).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [
                                (0, l._)(
                                  "a",
                                  null,
                                  "@" + (0, i.zw)(t.user.username),
                                  1
                                ),
                              ]
                            ),
                            S,
                            (0, l._)("span", T, (0, i.zw)(te.value), 1),
                          ]),
                          (0, l._)(
                            "span",
                            {
                              class: "tweet-action-icon extra-btn",
                              onClick: (0, n.iM)(ie, ["stop"]),
                            },
                            [
                              (0, l.Wm)(o, {
                                name: "hi-dots-horizontal",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                              X.value
                                ? ((0, l.wg)(), (0, l.iD)("div", x))
                                : (0, l.kq)("", !0),
                              X.value
                                ? ((0, l.wg)(),
                                  (0, l.iD)("div", b, [
                                    (0, l._)("ul", D, [
                                      (0, a.SU)(V).currentId == t.user.id ||
                                      (0, a.SU)(V).currentUser.isAdmin
                                        ? ((0, l.wg)(),
                                          (0, l.iD)(
                                            "li",
                                            {
                                              key: 0,
                                              class:
                                                "tweet-menu-item delete-tweet",
                                              onClick: ae,
                                            },
                                            [
                                              (0, l._)("span", M, [
                                                (0, l.Wm)(o, {
                                                  name: "bi-trash",
                                                  scale: "1.1",
                                                  fill: "red",
                                                }),
                                              ]),
                                              (0, l.Uk)("Delete "),
                                            ]
                                          ))
                                        : (0, l.kq)("", !0),
                                      (0, a.SU)(G).canFollow(
                                        (0, a.SU)(V).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, l.wg)(),
                                          (0, l.iD)(
                                            "li",
                                            {
                                              key: 1,
                                              class: "tweet-menu-item",
                                              onClick:
                                                r[3] ||
                                                (r[3] = (e) =>
                                                  (0, a.SU)(G).followUser(
                                                    (0, a.SU)(V).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, l._)("span", I, [
                                                (0, l.Wm)(o, {
                                                  name: "co-user-follow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, l.Uk)(
                                                "Follow @" +
                                                  (0, i.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, l.kq)("", !0),
                                      (0, a.SU)(G).canUnfollow(
                                        (0, a.SU)(V).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, l.wg)(),
                                          (0, l.iD)(
                                            "li",
                                            {
                                              key: 2,
                                              class: "tweet-menu-item",
                                              onClick:
                                                r[4] ||
                                                (r[4] = (e) =>
                                                  (0, a.SU)(G).unfollowUser(
                                                    (0, a.SU)(V).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, l._)("span", q, [
                                                (0, l.Wm)(o, {
                                                  name: "co-user-unfollow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, l.Uk)(
                                                "Unfollow @" +
                                                  (0, i.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, l.kq)("", !0),
                                      z,
                                    ]),
                                  ]))
                                : (0, l.kq)("", !0),
                            ],
                            8,
                            h
                          ),
                        ]),
                        (0, l._)("div", W, [
                          "reply" === t.tweet.type && t.tweet.replyingToTweet
                            ? ((0, l.wg)(),
                              (0, l.iD)("div", R, [
                                P,
                                (0, l._)(
                                  "a",
                                  {
                                    class: "blue-link",
                                    onClick:
                                      r[5] ||
                                      (r[5] = (0, n.iM)(
                                        (e) =>
                                          (0, a.SU)(V).viewUserProfile(
                                            t.replyingTo
                                          ),
                                        ["stop"]
                                      )),
                                  },
                                  "@" + (0, i.zw)(t.replyingTo),
                                  1
                                ),
                              ]))
                            : (0, l.kq)("", !0),
                          (0, l._)("div", F, [
                            (0, l.Wm)(w.Z, { text: t.tweet.text }, null, 8, [
                              "text",
                            ]),
                          ]),
                          t.tweet.media.length > 0
                            ? ((0, l.wg)(),
                              (0, l.iD)(
                                "div",
                                {
                                  key: 1,
                                  class: (0, i.C_)([
                                    "tweet-media",
                                    [(0, a.SU)(d.YM)(t.tweet.media)],
                                  ]),
                                },
                                [
                                  ((0, l.wg)(!0),
                                  (0, l.iD)(
                                    l.HY,
                                    null,
                                    (0, l.Ko)(
                                      t.tweet.media,
                                      (e) => (
                                        (0, l.wg)(),
                                        (0, l.iD)(
                                          "div",
                                          {
                                            class: "image-preview-wrapper",
                                            key: t.tweet.media.indexOf(e),
                                          },
                                          [
                                            (0, l._)(
                                              "img",
                                              { src: e },
                                              null,
                                              8,
                                              Z
                                            ),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                2
                              ))
                            : (0, l.kq)("", !0),
                        ]),
                        (0, l._)("div", H, [
                          (0, l._)("span", B, [
                            (0, l._)(
                              "span",
                              {
                                class: "tweet-action-icon reply-btn",
                                onClick: (0, n.iM)(oe, ["stop"]),
                              },
                              [
                                (0, l.Wm)(o, {
                                  name: "fa-regular-comment",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              8,
                              L
                            ),
                            (0, l._)(
                              "span",
                              $,
                              (0, i.zw)(
                                t.tweet.repliesFrom.length > 0
                                  ? t.tweet.repliesFrom.length
                                  : ""
                              ),
                              1
                            ),
                          ]),
                          (0, l._)("span", j, [
                            (0, l._)(
                              "span",
                              {
                                class: (0, i.C_)([
                                  "tweet-action-icon retweet-btn",
                                  { retweeted: (0, a.SU)(le) },
                                ]),
                                onClick: (0, n.iM)(re, ["stop"]),
                              },
                              [
                                (0, l.Wm)(o, {
                                  name: "la-retweet-solid",
                                  scale: "1.15",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              Y
                            ),
                            (0, l._)(
                              "span",
                              O,
                              (0, i.zw)(t.tweet.retweetCount || ""),
                              1
                            ),
                          ]),
                          (0, l._)("span", E, [
                            (0, l._)(
                              "span",
                              {
                                class: (0, i.C_)([
                                  "tweet-action-icon like-btn",
                                  { liked: (0, a.SU)(se) },
                                ]),
                                onClick: (0, n.iM)(ne, ["stop"]),
                              },
                              [
                                (0, l.Wm)(o, {
                                  name: "fa-regular-heart",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              A
                            ),
                            (0, l._)(
                              "span",
                              K,
                              (0, i.zw)(t.tweet.likeCount || ""),
                              1
                            ),
                          ]),
                          (0, l._)(
                            "span",
                            {
                              class: "tweet-action-icon share-tweet-btn",
                              onClick: (0, n.iM)(ce, ["stop"]),
                            },
                            [
                              (0, l.Wm)(o, {
                                name: "gi-share",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                            ],
                            8,
                            N
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  2
                )
              );
            }
          );
        },
      };
      const G = V;
      var J = G;
    },
  },
]);
//# sourceMappingURL=960.2bb952fe.js.map
