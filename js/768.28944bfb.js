"use strict";
(self["webpackChunkchitter"] = self["webpackChunkchitter"] || []).push([
  [768],
  {
    5768: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return ce;
          },
        });
      s(541);
      var a = s(3396),
        l = s(4870),
        i = s(4621),
        r = s(7139),
        n = s(9242),
        o = s(8341),
        c = s(1187),
        w = s(1172),
        u = s(9707),
        d = s(7925),
        p = s(9327),
        f = s(988);
      const m = (e) => (
          (0, a.dD)("data-v-c7c51d32"), (e = e()), (0, a.Cn)(), e
        ),
        g = { key: 0, class: "user-retweet gray-text" },
        v = { class: "tweet-body" },
        k = { class: "profile-pic-and-user" },
        y = { class: "profile-pic-container" },
        U = { class: "tweet-data" },
        _ = { class: "user-info-and-btn" },
        S = { class: "user-info-wrapper" },
        C = ["onClick"],
        T = { key: 0, class: "overlay" },
        h = { key: 1, class: "tweet-menu-container" },
        b = { class: "tweet-menu-list" },
        x = { class: "tweet-menu-icon" },
        D = { class: "tweet-menu-icon" },
        I = { class: "tweet-menu-icon" },
        M = m(() => (0, a._)("button", { class: "cancel-btn" }, "Cancel", -1)),
        q = { class: "tweet-content" },
        z = { key: 0, class: "replying-to" },
        W = m(() =>
          (0, a._)("span", { class: "gray-text" }, "Replying to ", -1)
        ),
        P = { class: "tweet-text" },
        R = ["src"],
        H = { class: "date-and-time" },
        F = { class: "tweet-time gray-text" },
        Z = m(() =>
          (0, a._)("span", { class: "separator gray-text" }, "·", -1)
        ),
        B = { class: "tweet-time gray-text" },
        L = { key: 0, class: "tweet-metrics-wrapper" },
        j = m(() => (0, a._)("span", { class: "gray-text" }, " Retweets", -1)),
        $ = m(() => (0, a._)("span", { class: "gray-text" }, " Likes", -1)),
        O = { class: "tweet-actions-wrapper" },
        Y = { class: "tweet-action-container" },
        E = ["onClick"],
        A = { class: "tweet-action-container" },
        K = ["onClick"],
        N = { class: "tweet-action-container" },
        J = ["onClick"],
        V = { class: "tweet-action-container" },
        G = ["onClick"];
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
              i = (0, p.q)(),
              m = (0, f.U)(),
              Q = (0, l.iH)(!1),
              X = (0, l.iH)(null),
              ee = (0, a.Fl)(() => s.hasLiked(t.tweet.id, i.currentId)),
              te = (0, a.Fl)(() => s.hasRetweeted(t.tweet.id, i.currentId)),
              se = (e) => {
                i.setModalType(e), i.toggleModal();
              },
              ae = () => {
                i.currentUser && (Q.value = !Q.value);
              },
              le = () => {
                i.routeTweetId == t.id
                  ? t.tweet.replyingToTweet &&
                    i.setTweetContext(t.tweet.replyingToTweet)
                  : i.setTweetContext(null),
                  s.removeTweet(t.id, t.user.id);
              },
              ie = () => {
                ee.value
                  ? s.removeLike(t.id, i.currentId)
                  : s.addLike(t.id, i.currentId, t.retweetedBy);
              },
              re = () => {
                te.value
                  ? s.removeRetweet(t.id, i.currentId)
                  : s.addRetweet(t.id, i.currentId, t.retweetedBy);
              },
              ne = () => {
                i.setModalType("reply"),
                  i.setModalReply(t.user.id, t.id),
                  i.toggleModal();
              },
              oe = () => {
                i.toast("Copied to clipboard"),
                  navigator.clipboard.writeText(
                    `${window.location.host}/status/${t.id}`
                  );
              };
            return (e, s) => {
              const d = (0, a.up)("v-icon");
              return (
                (0, a.wg)(),
                (0, a.iD)(
                  "div",
                  {
                    class: "tweet-container",
                    ref_key: "tweetContainer",
                    ref: X,
                  },
                  [
                    "retweet" === t.type && t.retweetedBy
                      ? ((0, a.wg)(),
                        (0, a.iD)("div", g, [
                          (0, a.Wm)(d, {
                            name: "la-retweet-solid",
                            scale: "0.89",
                            fill: "#ffffff80",
                          }),
                          (0, a.Uk)(
                            " " + (0, r.zw)(t.retweetedBy) + " Retweeted ",
                            1
                          ),
                        ]))
                      : (0, a.kq)("", !0),
                    (0, a._)("div", v, [
                      (0, a._)("div", k, [
                        (0, a._)("div", y, [
                          (0, a.Wm)(
                            o.Z,
                            {
                              url: t.user.avatarUrl,
                              size: 48,
                              onClick:
                                s[0] ||
                                (s[0] = (0, n.iM)(
                                  (e) =>
                                    (0, l.SU)(i).viewUserProfile(
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
                        (0, a._)("div", U, [
                          (0, a._)("div", _, [
                            (0, a._)("div", S, [
                              (0, a._)(
                                "span",
                                {
                                  class: "display-name",
                                  onClick:
                                    s[1] ||
                                    (s[1] = (0, n.iM)(
                                      (e) =>
                                        (0, l.SU)(i).viewUserProfile(
                                          t.user.username
                                        ),
                                      ["stop"]
                                    )),
                                },
                                [(0, a._)("a", null, (0, r.zw)(t.user.name), 1)]
                              ),
                              (0, a._)(
                                "span",
                                {
                                  class: "username gray-text",
                                  onClick:
                                    s[2] ||
                                    (s[2] = (0, n.iM)(
                                      (e) =>
                                        (0, l.SU)(i).viewUserProfile(
                                          t.user.username
                                        ),
                                      ["stop"]
                                    )),
                                },
                                [
                                  (0, a._)(
                                    "a",
                                    null,
                                    "@" + (0, r.zw)(t.user.username),
                                    1
                                  ),
                                ]
                              ),
                            ]),
                            (0, a._)(
                              "span",
                              {
                                class: "tweet-action-icon extra-btn",
                                onClick: (0, n.iM)(ae, ["stop"]),
                              },
                              [
                                (0, a.Wm)(d, {
                                  name: "hi-dots-horizontal",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                                Q.value
                                  ? ((0, a.wg)(), (0, a.iD)("div", T))
                                  : (0, a.kq)("", !0),
                                Q.value
                                  ? ((0, a.wg)(),
                                    (0, a.iD)("div", h, [
                                      (0, a._)("ul", b, [
                                        (0, l.SU)(i).currentId == t.user.id ||
                                        (0, l.SU)(i).currentUser.isAdmin
                                          ? ((0, a.wg)(),
                                            (0, a.iD)(
                                              "li",
                                              {
                                                key: 0,
                                                class:
                                                  "tweet-menu-item delete-tweet",
                                                onClick: le,
                                              },
                                              [
                                                (0, a._)("span", x, [
                                                  (0, a.Wm)(d, {
                                                    name: "bi-trash",
                                                    scale: "1.1",
                                                    fill: "red",
                                                  }),
                                                ]),
                                                (0, a.Uk)("Delete "),
                                              ]
                                            ))
                                          : (0, a.kq)("", !0),
                                        (0, l.SU)(m).canFollow(
                                          (0, l.SU)(i).currentUser,
                                          t.user.id
                                        )
                                          ? ((0, a.wg)(),
                                            (0, a.iD)(
                                              "li",
                                              {
                                                key: 1,
                                                class: "tweet-menu-item",
                                                onClick:
                                                  s[3] ||
                                                  (s[3] = (e) =>
                                                    (0, l.SU)(m).followUser(
                                                      (0, l.SU)(i).currentId,
                                                      t.user.id
                                                    )),
                                              },
                                              [
                                                (0, a._)("span", D, [
                                                  (0, a.Wm)(d, {
                                                    name: "co-user-follow",
                                                    scale: "1.1",
                                                    fill: "#ffffff80",
                                                  }),
                                                ]),
                                                (0, a.Uk)(
                                                  "Follow @" +
                                                    (0, r.zw)(t.user.username),
                                                  1
                                                ),
                                              ]
                                            ))
                                          : (0, a.kq)("", !0),
                                        (0, l.SU)(m).canUnfollow(
                                          (0, l.SU)(i).currentUser,
                                          t.user.id
                                        )
                                          ? ((0, a.wg)(),
                                            (0, a.iD)(
                                              "li",
                                              {
                                                key: 2,
                                                class: "tweet-menu-item",
                                                onClick:
                                                  s[4] ||
                                                  (s[4] = (e) =>
                                                    (0, l.SU)(m).unfollowUser(
                                                      (0, l.SU)(i).currentId,
                                                      t.user.id
                                                    )),
                                              },
                                              [
                                                (0, a._)("span", I, [
                                                  (0, a.Wm)(d, {
                                                    name: "co-user-unfollow",
                                                    scale: "1.1",
                                                    fill: "#ffffff80",
                                                  }),
                                                ]),
                                                (0, a.Uk)(
                                                  "Unfollow @" +
                                                    (0, r.zw)(t.user.username),
                                                  1
                                                ),
                                              ]
                                            ))
                                          : (0, a.kq)("", !0),
                                        M,
                                      ]),
                                    ]))
                                  : (0, a.kq)("", !0),
                              ],
                              8,
                              C
                            ),
                          ]),
                        ]),
                      ]),
                      (0, a._)("div", q, [
                        "reply" === t.tweet.type && t.tweet.replyingToTweet
                          ? ((0, a.wg)(),
                            (0, a.iD)("div", z, [
                              W,
                              (0, a._)(
                                "a",
                                {
                                  class: "blue-link",
                                  onClick:
                                    s[5] ||
                                    (s[5] = (0, n.iM)(
                                      (e) =>
                                        (0, l.SU)(i).viewUserProfile(
                                          t.replyingTo
                                        ),
                                      ["stop"]
                                    )),
                                },
                                "@" + (0, r.zw)(t.replyingTo),
                                1
                              ),
                            ]))
                          : (0, a.kq)("", !0),
                        (0, a._)("div", P, [
                          (0, a.Wm)(c.Z, { text: t.tweet.text }, null, 8, [
                            "text",
                          ]),
                        ]),
                        t.tweet.media.length > 0
                          ? ((0, a.wg)(),
                            (0, a.iD)(
                              "div",
                              {
                                key: 1,
                                class: (0, r.C_)([
                                  "tweet-media",
                                  [(0, l.SU)(u.YM)(t.tweet.media)],
                                ]),
                              },
                              [
                                ((0, a.wg)(!0),
                                (0, a.iD)(
                                  a.HY,
                                  null,
                                  (0, a.Ko)(
                                    t.tweet.media,
                                    (e) => (
                                      (0, a.wg)(),
                                      (0, a.iD)(
                                        "div",
                                        {
                                          class: "image-preview-wrapper",
                                          key: t.tweet.media.indexOf(e),
                                        },
                                        [
                                          (0, a._)(
                                            "img",
                                            { src: e },
                                            null,
                                            8,
                                            R
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
                          : (0, a.kq)("", !0),
                      ]),
                      (0, a._)("div", H, [
                        (0, a._)(
                          "span",
                          F,
                          (0, r.zw)(
                            (0, l.SU)(w.Z).formatTime(t.tweet.timestamp)
                          ),
                          1
                        ),
                        Z,
                        (0, a._)(
                          "span",
                          B,
                          (0, r.zw)(
                            (0, l.SU)(w.Z).formatFullDate(t.tweet.timestamp)
                          ),
                          1
                        ),
                      ]),
                      t.tweet.retweetCount > 0 || t.tweet.likeCount > 0
                        ? ((0, a.wg)(),
                          (0, a.iD)("div", L, [
                            t.tweet.retweetCount > 0
                              ? ((0, a.wg)(),
                                (0, a.iD)(
                                  "span",
                                  {
                                    key: 0,
                                    class: "tweet-metric",
                                    onClick:
                                      s[6] ||
                                      (s[6] = (e) => se("retweet-list")),
                                  },
                                  [
                                    (0, a._)(
                                      "strong",
                                      null,
                                      (0, r.zw)(t.tweet.retweetCount),
                                      1
                                    ),
                                    j,
                                  ]
                                ))
                              : (0, a.kq)("", !0),
                            t.tweet.likeCount > 0
                              ? ((0, a.wg)(),
                                (0, a.iD)(
                                  "span",
                                  {
                                    key: 1,
                                    class: "tweet-metric",
                                    onClick:
                                      s[7] || (s[7] = (e) => se("like-list")),
                                  },
                                  [
                                    (0, a._)(
                                      "strong",
                                      null,
                                      (0, r.zw)(t.tweet.likeCount),
                                      1
                                    ),
                                    $,
                                  ]
                                ))
                              : (0, a.kq)("", !0),
                          ]))
                        : (0, a.kq)("", !0),
                      (0, a._)("div", O, [
                        (0, a._)("div", Y, [
                          (0, a._)(
                            "span",
                            {
                              class: "tweet-action-icon reply-btn",
                              onClick: (0, n.iM)(ne, ["stop"]),
                            },
                            [
                              (0, a.Wm)(d, {
                                name: "fa-regular-comment",
                                scale: "1.3",
                                fill: "#ffffff80",
                              }),
                            ],
                            8,
                            E
                          ),
                        ]),
                        (0, a._)("div", A, [
                          (0, a._)(
                            "span",
                            {
                              class: (0, r.C_)([
                                "tweet-action-icon retweet-btn",
                                { retweeted: (0, l.SU)(te) },
                              ]),
                              onClick: (0, n.iM)(re, ["stop"]),
                            },
                            [
                              (0, a.Wm)(d, {
                                name: "la-retweet-solid",
                                scale: "1.45",
                                fill: "#ffffff80",
                              }),
                            ],
                            10,
                            K
                          ),
                        ]),
                        (0, a._)("div", N, [
                          (0, a._)(
                            "span",
                            {
                              class: (0, r.C_)([
                                "tweet-action-icon like-btn",
                                { liked: (0, l.SU)(ee) },
                              ]),
                              onClick: (0, n.iM)(ie, ["stop"]),
                            },
                            [
                              (0, a.Wm)(d, {
                                name: "fa-regular-heart",
                                scale: "1.3",
                                fill: "#ffffff80",
                              }),
                            ],
                            10,
                            J
                          ),
                        ]),
                        (0, a._)("div", V, [
                          (0, a._)(
                            "span",
                            {
                              class: "tweet-action-icon share-tweet-btn",
                              onClick: (0, n.iM)(oe, ["stop"]),
                            },
                            [
                              (0, a.Wm)(d, {
                                name: "gi-share",
                                scale: "1.3",
                                fill: "#ffffff80",
                              }),
                            ],
                            8,
                            G
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
      const ee = (0, X.Z)(Q, [["__scopeId", "data-v-c7c51d32"]]);
      var te = ee;
      const se = (e) => (
          (0, a.dD)("data-v-605ba40b"), (e = e()), (0, a.Cn)(), e
        ),
        ae = { key: 0, class: "tweet-list-container" },
        le = se(() =>
          (0, a._)(
            "div",
            { class: "deleted-tweet" },
            [
              (0, a._)(
                "span",
                { class: "gray-text" },
                "Tweet has been deleted."
              ),
            ],
            -1
          )
        ),
        ie = [le],
        re = { key: 1, class: "error gray-text" };
      var ne = {
        __name: "TweetContext",
        props: ["id"],
        setup(e) {
          const t = e,
            s = (0, p.q)(),
            r = (0, f.U)(),
            n = (0, d.g)(),
            o = (0, a.Fl)(() => n.getTweet(t.id)),
            c = (0, a.Fl)(() =>
              o.value ? n.getTweet(o.value.replyingToTweet) : null
            ),
            w = (0, l.iH)([]),
            u = (0, a.Fl)(() =>
              o.value
                ? o.value.repliesFrom.map((e) => n.getTweet(e)) || []
                : null
            ),
            m = () => {
              if (((w.value = []), !o.value)) return;
              let e = o.value;
              while (e.replyingToTweet)
                try {
                  let t = n.getTweet(e.replyingToTweet);
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
            (0, a.YP)([() => s.viewTweetId, c], () => {
              m();
            }),
            (0, a.bv)(() => {
              m();
            }),
            (e, t) =>
              (0, l.SU)(o)
                ? ((0, a.wg)(),
                  (0, a.iD)("div", ae, [
                    ((0, a.wg)(!0),
                    (0, a.iD)(
                      a.HY,
                      null,
                      (0, a.Ko)(
                        w.value,
                        (e) => (
                          (0, a.wg)(),
                          (0, a.iD)(
                            a.HY,
                            null,
                            [
                              e
                                ? ((0, a.wg)(),
                                  (0, a.j4)(
                                    i.Z,
                                    {
                                      key: e.id,
                                      id: e.id,
                                      user: {
                                        id: e.authorId,
                                        name: (0, l.SU)(r).getUser(e.authorId)
                                          .name,
                                        username: (0, l.SU)(r).getUser(
                                          e.authorId
                                        ).username,
                                        avatarUrl: (0, l.SU)(r).getUser(
                                          e.authorId
                                        ).avatarUrl,
                                      },
                                      tweet: e,
                                      type: e.type,
                                      replyingTo: (0, l.SU)(r).getUsername(
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
                                : ((0, a.wg)(),
                                  (0, a.iD)(
                                    "div",
                                    {
                                      class: "tweet-container",
                                      key: w.value.indexOf(e),
                                    },
                                    ie
                                  )),
                            ],
                            64
                          )
                        )
                      ),
                      256
                    )),
                    (0, l.SU)(o)
                      ? ((0, a.wg)(),
                        (0, a.j4)(
                          te,
                          {
                            key: 0,
                            id: (0, l.SU)(o).id,
                            user: {
                              id: (0, l.SU)(o).authorId,
                              name: (0, l.SU)(r).getUser((0, l.SU)(o).authorId)
                                .name,
                              username: (0, l.SU)(r).getUser(
                                (0, l.SU)(o).authorId
                              ).username,
                              avatarUrl: (0, l.SU)(r).getUser(
                                (0, l.SU)(o).authorId
                              ).avatarUrl,
                            },
                            tweet: (0, l.SU)(o),
                            type: (0, l.SU)(o).type,
                            replyingTo: (0, l.SU)(r).getUsername(
                              (0, l.SU)(o).replyingToUser
                            ),
                          },
                          null,
                          8,
                          ["id", "user", "tweet", "type", "replyingTo"]
                        ))
                      : (0, a.kq)("", !0),
                    (0, l.SU)(u) && (0, l.SU)(u).length > 0
                      ? ((0, a.wg)(!0),
                        (0, a.iD)(
                          a.HY,
                          { key: 1 },
                          (0, a.Ko)(
                            (0, l.SU)(u),
                            (e) => (
                              (0, a.wg)(),
                              (0, a.j4)(
                                i.Z,
                                {
                                  key: e.id,
                                  id: e.id,
                                  user: {
                                    id: e.authorId,
                                    name: (0, l.SU)(r).getUser(e.authorId).name,
                                    username: (0, l.SU)(r).getUser(e.authorId)
                                      .username,
                                    avatarUrl: (0, l.SU)(r).getUser(e.authorId)
                                      .avatarUrl,
                                  },
                                  tweet: e,
                                  type: e.type,
                                  replyingTo: (0, l.SU)(r).getUsername(
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
                      : (0, a.kq)("", !0),
                  ]))
                : ((0, a.wg)(), (0, a.iD)("div", re, "Tweet does not exist."))
          );
        },
      };
      const oe = (0, X.Z)(ne, [["__scopeId", "data-v-605ba40b"]]);
      var ce = oe;
    },
    1187: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = s(3396),
        l = s(4870),
        i = s(9707),
        r = s(9327);
      const n = ["innerHTML"];
      var o = {
          __name: "EmbeddedText",
          props: ["text"],
          setup(e) {
            const t = e,
              s = (0, l.iH)(null),
              o = (0, r.q)(),
              c = () => {
                if (!t.text || 0 === t.text.length) return;
                const e = t.text.split(" ").map((e) => {
                  const t = e.split(/\r?\n/);
                  switch (!0) {
                    case i.yV.test(e):
                      return `<a class="blue-link" href="${e}" target="_blank">${e}</a>`;
                    case i.nC.test(e):
                      return `<a class="blue-link">${e}</a>`;
                    case t.some((e) => i.PH.test(e)):
                      return t
                        .map((s) =>
                          i.PH.test(s)
                            ? `<a class="blue-link user-link" data-username=${e.replace(
                                "@",
                                ""
                              )}>${t.filter((e) => i.PH.test(e))[0]}</a>`
                            : s
                        )
                        .join("\n");
                    default:
                      return e;
                  }
                });
                return e.join(" ");
              };
            return (
              (0, a.bv)(() => {
                const e = s.value.querySelectorAll(".user-link");
                Array.from(e).forEach((e) =>
                  e.addEventListener(
                    "click",
                    function (t) {
                      t.stopPropagation(),
                        o.viewUserProfile(e.dataset.username);
                    },
                    { capture: !1, once: !0 }
                  )
                );
              }),
              (e, t) => (
                (0, a.wg)(),
                (0, a.iD)(
                  "div",
                  { ref_key: "textEl", ref: s, innerHTML: c() },
                  null,
                  8,
                  n
                )
              )
            );
          },
        },
        c = s(89);
      const w = (0, c.Z)(o, [["__scopeId", "data-v-6a7454c8"]]);
      var u = w;
    },
    4621: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return G;
        },
      });
      var a = s(3396),
        l = s(7139),
        i = s(4870),
        r = s(9242),
        n = s(5743),
        o = s.n(n),
        c = s(8341),
        w = s(1187),
        u = s(1172),
        d = s(9707),
        p = s(7925),
        f = s(9327),
        m = s(988);
      const g = { key: 0, class: "user-retweet gray-text" },
        v = { class: "tweet-body" },
        k = { class: "profile-pic-container" },
        y = { key: 0, class: "gray-line" },
        U = { class: "tweet-data" },
        _ = { class: "user-info-and-btn" },
        S = { class: "user-info-wrapper" },
        C = (0, a._)("span", { class: "separator gray-text" }, "·", -1),
        T = { class: "tweet-time gray-text" },
        h = ["onClick"],
        b = { key: 0, class: "overlay" },
        x = { key: 1, class: "tweet-menu-container" },
        D = { class: "tweet-menu-list" },
        I = { class: "tweet-menu-icon" },
        M = { class: "tweet-menu-icon" },
        q = { class: "tweet-menu-icon" },
        z = (0, a._)("button", { class: "cancel-btn" }, "Cancel", -1),
        W = { class: "tweet-content" },
        P = { key: 0, class: "replying-to" },
        R = (0, a._)("span", { class: "gray-text" }, "Replying to ", -1),
        H = { class: "tweet-text" },
        F = ["src"],
        Z = { class: "tweet-actions-wrapper" },
        B = { class: "tweet-metrics" },
        L = ["onClick"],
        j = { class: "tweet-metric reply-metric gray-text" },
        $ = { class: "tweet-metrics" },
        O = ["onClick"],
        Y = { class: "tweet-metric retweet-metric gray-text" },
        E = { class: "tweet-metrics" },
        A = ["onClick"],
        K = { class: "tweet-metric like-metric gray-text" },
        N = ["onClick"];
      var J = {
        __name: "TweetCard",
        props: {
          id: String,
          user: Object,
          tweet: Object,
          type: String,
          retweetedBy: String,
          replyingTo: String,
          isPreviousReply: Boolean,
          isNewNotification: Boolean,
        },
        setup(e) {
          const t = e,
            n = (0, p.g)(),
            J = (0, f.q)(),
            V = (0, m.U)();
          var G = s(893);
          o().extend(G);
          let Q = null;
          const X = (0, i.iH)(!1),
            ee = (0, i.iH)(o()().toISOString()),
            te = (0, i.iH)(u.Z.formatTweetDate(t.tweet.timestamp, ee.value)),
            se = (0, a.Fl)(() => n.hasLiked(t.tweet.id, J.currentId)),
            ae = (0, a.Fl)(() => n.hasRetweeted(t.tweet.id, J.currentId)),
            le = () => {
              J.currentUser && (X.value = !X.value);
            },
            ie = () => {
              n.removeTweet(t.id, t.user.id);
            },
            re = () => {
              se.value
                ? n.removeLike(t.id, J.currentId)
                : n.addLike(t.id, J.currentId, t.retweetedBy);
            },
            ne = () => {
              ae.value
                ? n.removeRetweet(t.id, J.currentId)
                : n.addRetweet(t.id, J.currentId, t.retweetedBy);
            },
            oe = () => {
              J.setModalType("reply"),
                J.setModalReply(t.user.id, t.id),
                J.toggleModal();
            },
            ce = () => {
              J.toast("Copied to clipboard"),
                navigator.clipboard.writeText(
                  `${window.location.host}/status/${t.id}`
                );
            };
          return (
            (0, a.bv)(() => {
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
            (0, a.Jd)(() => {
              clearInterval(Q);
            }),
            (s, n) => {
              const o = (0, a.up)("v-icon");
              return (
                (0, a.wg)(),
                (0, a.iD)(
                  "div",
                  {
                    class: (0, l.C_)([
                      "tweet-container",
                      { border: !e.isPreviousReply, new: e.isNewNotification },
                    ]),
                    onClick:
                      n[6] ||
                      (n[6] = (e) => (0, i.SU)(J).setTweetContext(t.id)),
                  },
                  [
                    "retweet" === t.type && t.retweetedBy
                      ? ((0, a.wg)(),
                        (0, a.iD)("div", g, [
                          (0, a.Wm)(o, {
                            name: "la-retweet-solid",
                            scale: "0.89",
                            fill: "#ffffff80",
                          }),
                          (0, a.Uk)(
                            " " + (0, l.zw)(t.retweetedBy) + " Retweeted ",
                            1
                          ),
                        ]))
                      : (0, a.kq)("", !0),
                    (0, a._)("div", v, [
                      (0, a._)("div", k, [
                        (0, a.Wm)(
                          c.Z,
                          {
                            url: t.user.avatarUrl,
                            size: 48,
                            onClick:
                              n[0] ||
                              (n[0] = (0, r.iM)(
                                (e) =>
                                  (0, i.SU)(J).viewUserProfile(t.user.username),
                                ["stop"]
                              )),
                          },
                          null,
                          8,
                          ["url"]
                        ),
                        e.isPreviousReply
                          ? ((0, a.wg)(), (0, a.iD)("div", y))
                          : (0, a.kq)("", !0),
                      ]),
                      (0, a._)("div", U, [
                        (0, a._)("div", _, [
                          (0, a._)("div", S, [
                            (0, a._)(
                              "span",
                              {
                                class: "display-name",
                                onClick:
                                  n[1] ||
                                  (n[1] = (0, r.iM)(
                                    (e) =>
                                      (0, i.SU)(J).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [(0, a._)("a", null, (0, l.zw)(t.user.name), 1)]
                            ),
                            (0, a._)(
                              "span",
                              {
                                class: "username gray-text",
                                onClick:
                                  n[2] ||
                                  (n[2] = (0, r.iM)(
                                    (e) =>
                                      (0, i.SU)(J).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [
                                (0, a._)(
                                  "a",
                                  null,
                                  "@" + (0, l.zw)(t.user.username),
                                  1
                                ),
                              ]
                            ),
                            C,
                            (0, a._)("span", T, (0, l.zw)(te.value), 1),
                          ]),
                          (0, a._)(
                            "span",
                            {
                              class: "tweet-action-icon extra-btn",
                              onClick: (0, r.iM)(le, ["stop"]),
                            },
                            [
                              (0, a.Wm)(o, {
                                name: "hi-dots-horizontal",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                              X.value
                                ? ((0, a.wg)(), (0, a.iD)("div", b))
                                : (0, a.kq)("", !0),
                              X.value
                                ? ((0, a.wg)(),
                                  (0, a.iD)("div", x, [
                                    (0, a._)("ul", D, [
                                      (0, i.SU)(J).currentId == t.user.id ||
                                      (0, i.SU)(J).currentUser.isAdmin
                                        ? ((0, a.wg)(),
                                          (0, a.iD)(
                                            "li",
                                            {
                                              key: 0,
                                              class:
                                                "tweet-menu-item delete-tweet",
                                              onClick: ie,
                                            },
                                            [
                                              (0, a._)("span", I, [
                                                (0, a.Wm)(o, {
                                                  name: "bi-trash",
                                                  scale: "1.1",
                                                  fill: "red",
                                                }),
                                              ]),
                                              (0, a.Uk)("Delete "),
                                            ]
                                          ))
                                        : (0, a.kq)("", !0),
                                      (0, i.SU)(V).canFollow(
                                        (0, i.SU)(J).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, a.wg)(),
                                          (0, a.iD)(
                                            "li",
                                            {
                                              key: 1,
                                              class: "tweet-menu-item",
                                              onClick:
                                                n[3] ||
                                                (n[3] = (e) =>
                                                  (0, i.SU)(V).followUser(
                                                    (0, i.SU)(J).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, a._)("span", M, [
                                                (0, a.Wm)(o, {
                                                  name: "co-user-follow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, a.Uk)(
                                                "Follow @" +
                                                  (0, l.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, a.kq)("", !0),
                                      (0, i.SU)(V).canUnfollow(
                                        (0, i.SU)(J).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, a.wg)(),
                                          (0, a.iD)(
                                            "li",
                                            {
                                              key: 2,
                                              class: "tweet-menu-item",
                                              onClick:
                                                n[4] ||
                                                (n[4] = (e) =>
                                                  (0, i.SU)(V).unfollowUser(
                                                    (0, i.SU)(J).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, a._)("span", q, [
                                                (0, a.Wm)(o, {
                                                  name: "co-user-unfollow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, a.Uk)(
                                                "Unfollow @" +
                                                  (0, l.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, a.kq)("", !0),
                                      z,
                                    ]),
                                  ]))
                                : (0, a.kq)("", !0),
                            ],
                            8,
                            h
                          ),
                        ]),
                        (0, a._)("div", W, [
                          "reply" === t.tweet.type && t.tweet.replyingToTweet
                            ? ((0, a.wg)(),
                              (0, a.iD)("div", P, [
                                R,
                                (0, a._)(
                                  "a",
                                  {
                                    class: "blue-link",
                                    onClick:
                                      n[5] ||
                                      (n[5] = (0, r.iM)(
                                        (e) =>
                                          (0, i.SU)(J).viewUserProfile(
                                            t.replyingTo
                                          ),
                                        ["stop"]
                                      )),
                                  },
                                  "@" + (0, l.zw)(t.replyingTo),
                                  1
                                ),
                              ]))
                            : (0, a.kq)("", !0),
                          (0, a._)("div", H, [
                            (0, a.Wm)(w.Z, { text: t.tweet.text }, null, 8, [
                              "text",
                            ]),
                          ]),
                          t.tweet.media.length > 0
                            ? ((0, a.wg)(),
                              (0, a.iD)(
                                "div",
                                {
                                  key: 1,
                                  class: (0, l.C_)([
                                    "tweet-media",
                                    [(0, i.SU)(d.YM)(t.tweet.media)],
                                  ]),
                                },
                                [
                                  ((0, a.wg)(!0),
                                  (0, a.iD)(
                                    a.HY,
                                    null,
                                    (0, a.Ko)(
                                      t.tweet.media,
                                      (e) => (
                                        (0, a.wg)(),
                                        (0, a.iD)(
                                          "div",
                                          {
                                            class: "image-preview-wrapper",
                                            key: t.tweet.media.indexOf(e),
                                          },
                                          [
                                            (0, a._)(
                                              "img",
                                              { src: e },
                                              null,
                                              8,
                                              F
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
                            : (0, a.kq)("", !0),
                        ]),
                        (0, a._)("div", Z, [
                          (0, a._)("span", B, [
                            (0, a._)(
                              "span",
                              {
                                class: "tweet-action-icon reply-btn",
                                onClick: (0, r.iM)(oe, ["stop"]),
                              },
                              [
                                (0, a.Wm)(o, {
                                  name: "fa-regular-comment",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              8,
                              L
                            ),
                            (0, a._)(
                              "span",
                              j,
                              (0, l.zw)(
                                t.tweet.repliesFrom.length > 0
                                  ? t.tweet.repliesFrom.length
                                  : ""
                              ),
                              1
                            ),
                          ]),
                          (0, a._)("span", $, [
                            (0, a._)(
                              "span",
                              {
                                class: (0, l.C_)([
                                  "tweet-action-icon retweet-btn",
                                  { retweeted: (0, i.SU)(ae) },
                                ]),
                                onClick: (0, r.iM)(ne, ["stop"]),
                              },
                              [
                                (0, a.Wm)(o, {
                                  name: "la-retweet-solid",
                                  scale: "1.15",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              O
                            ),
                            (0, a._)(
                              "span",
                              Y,
                              (0, l.zw)(t.tweet.retweetCount || ""),
                              1
                            ),
                          ]),
                          (0, a._)("span", E, [
                            (0, a._)(
                              "span",
                              {
                                class: (0, l.C_)([
                                  "tweet-action-icon like-btn",
                                  { liked: (0, i.SU)(se) },
                                ]),
                                onClick: (0, r.iM)(re, ["stop"]),
                              },
                              [
                                (0, a.Wm)(o, {
                                  name: "fa-regular-heart",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              A
                            ),
                            (0, a._)(
                              "span",
                              K,
                              (0, l.zw)(t.tweet.likeCount || ""),
                              1
                            ),
                          ]),
                          (0, a._)(
                            "span",
                            {
                              class: "tweet-action-icon share-tweet-btn",
                              onClick: (0, r.iM)(ce, ["stop"]),
                            },
                            [
                              (0, a.Wm)(o, {
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
      const V = J;
      var G = V;
    },
  },
]);
//# sourceMappingURL=768.28944bfb.js.map
