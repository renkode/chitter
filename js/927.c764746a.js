"use strict";
(self["webpackChunkchitter"] = self["webpackChunkchitter"] || []).push([
  [927],
  {
    8927: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = a(3396),
        r = a(4870),
        i = a(9242),
        n = a(988),
        l = a(4621);
      const o = { class: "tweet-list" },
        c = { key: 1, class: "error gray-text" };
      var u = {
        __name: "TweetList",
        props: { tweets: Array },
        setup(e) {
          const t = e,
            a = (0, n.U)(),
            u = (0, s.Fl)(() =>
              t.tweets.filter(
                (e) => "undefined" !== typeof e && "undefined" !== typeof e.data
              )
            );
          return (e, t) => (
            (0, s.wg)(),
            (0, s.iD)("div", o, [
              (0, r.SU)(u) && (0, r.SU)(u).length > 0
                ? ((0, s.wg)(),
                  (0, s.j4)(
                    i.W3,
                    { key: 0, name: "fade-down" },
                    {
                      default: (0, s.w5)(() => [
                        ((0, s.wg)(!0),
                        (0, s.iD)(
                          s.HY,
                          null,
                          (0, s.Ko)(
                            (0, r.SU)(u),
                            (e) => (
                              (0, s.wg)(),
                              (0, s.j4)(
                                l.Z,
                                {
                                  key: e.data.id,
                                  id: e.data.id,
                                  user: {
                                    id: e.data.authorId,
                                    name: (0, r.SU)(a).getUser(e.data.authorId)
                                      .name,
                                    username: (0, r.SU)(a).getUser(
                                      e.data.authorId
                                    ).username,
                                    avatarUrl: (0, r.SU)(a).getUser(
                                      e.data.authorId
                                    ).avatarUrl,
                                  },
                                  tweet: e.data,
                                  type: e.type,
                                  retweetedBy: e.retweetedBy,
                                  replyingTo: (0, r.SU)(a).getUsername(
                                    e.data.replyingToUser
                                  ),
                                },
                                null,
                                8,
                                [
                                  "id",
                                  "user",
                                  "tweet",
                                  "type",
                                  "retweetedBy",
                                  "replyingTo",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }
                  ))
                : ((0, s.wg)(), (0, s.iD)("div", c, "No tweets to display")),
            ])
          );
        },
      };
      const w = u;
      var d = w;
    },
    1187: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return w;
        },
      });
      var s = a(3396),
        r = a(4870),
        i = a(9707),
        n = a(9327);
      const l = ["innerHTML"];
      var o = {
          __name: "EmbeddedText",
          props: ["text"],
          setup(e) {
            const t = e,
              a = (0, r.iH)(null),
              o = (0, n.q)(),
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
                        .map((a) =>
                          i.PH.test(a)
                            ? `<a class="blue-link user-link" data-username=${e.replace(
                                "@",
                                ""
                              )}>${t.filter((e) => i.PH.test(e))[0]}</a>`
                            : a
                        )
                        .join("\n");
                    default:
                      return e;
                  }
                });
                return e.join(" ");
              };
            return (
              (0, s.bv)(() => {
                const e = a.value.querySelectorAll(".user-link");
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
                (0, s.wg)(),
                (0, s.iD)(
                  "div",
                  { ref_key: "textEl", ref: a, innerHTML: c() },
                  null,
                  8,
                  l
                )
              )
            );
          },
        },
        c = a(89);
      const u = (0, c.Z)(o, [["__scopeId", "data-v-6a7454c8"]]);
      var w = u;
    },
    4621: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return G;
        },
      });
      var s = a(3396),
        r = a(7139),
        i = a(4870),
        n = a(9242),
        l = a(5743),
        o = a.n(l),
        c = a(8341),
        u = a(1187),
        w = a(1172),
        d = a(9707),
        f = a(7925),
        p = a(9327),
        m = a(988);
      const v = { key: 0, class: "user-retweet gray-text" },
        y = { class: "tweet-body" },
        k = { class: "profile-pic-container" },
        g = { key: 0, class: "gray-line" },
        U = { class: "tweet-data" },
        _ = { class: "user-info-and-btn" },
        S = { class: "user-info-wrapper" },
        C = (0, s._)("span", { class: "separator gray-text" }, "·", -1),
        h = { class: "tweet-time gray-text" },
        b = ["onClick"],
        x = { key: 0, class: "overlay" },
        D = { key: 1, class: "tweet-menu-container" },
        T = { class: "tweet-menu-list" },
        I = { class: "tweet-menu-icon" },
        M = { class: "tweet-menu-icon" },
        q = { class: "tweet-menu-icon" },
        z = (0, s._)("button", { class: "cancel-btn" }, "Cancel", -1),
        P = { class: "tweet-content" },
        W = { key: 0, class: "replying-to" },
        H = (0, s._)("span", { class: "gray-text" }, "Replying to ", -1),
        B = { class: "tweet-text" },
        Z = ["src"],
        R = { class: "tweet-actions-wrapper" },
        F = { class: "tweet-metrics" },
        L = ["onClick"],
        $ = { class: "tweet-metric reply-metric gray-text" },
        j = { class: "tweet-metrics" },
        A = ["onClick"],
        E = { class: "tweet-metric retweet-metric gray-text" },
        O = { class: "tweet-metrics" },
        N = ["onClick"],
        Y = { class: "tweet-metric like-metric gray-text" },
        K = ["onClick"];
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
            l = (0, f.g)(),
            J = (0, p.q)(),
            V = (0, m.U)();
          var G = a(893);
          o().extend(G);
          let Q = null;
          const X = (0, i.iH)(!1),
            ee = (0, i.iH)(o()().toISOString()),
            te = (0, i.iH)(w.Z.formatTweetDate(t.tweet.timestamp, ee.value)),
            ae = (0, s.Fl)(() => l.hasLiked(t.tweet.id, J.currentId)),
            se = (0, s.Fl)(() => l.hasRetweeted(t.tweet.id, J.currentId)),
            re = () => {
              J.currentUser && (X.value = !X.value);
            },
            ie = () => {
              l.removeTweet(t.id, t.user.id);
            },
            ne = () => {
              ae.value
                ? l.removeLike(t.id, J.currentId)
                : l.addLike(t.id, J.currentId, t.retweetedBy);
            },
            le = () => {
              se.value
                ? l.removeRetweet(t.id, J.currentId)
                : l.addRetweet(t.id, J.currentId, t.retweetedBy);
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
            (0, s.bv)(() => {
              o()(ee.value).diff(o()(t.tweet.timestamp), "hour") > 23 ||
                (Q = setInterval(() => {
                  te.value !==
                    w.Z.formatTweetDate(t.tweet.timestamp, ee.value) &&
                    (te.value = w.Z.formatTweetDate(
                      t.tweet.timestamp,
                      ee.value
                    ));
                }, 3e4));
            }),
            (0, s.Jd)(() => {
              clearInterval(Q);
            }),
            (a, l) => {
              const o = (0, s.up)("v-icon");
              return (
                (0, s.wg)(),
                (0, s.iD)(
                  "div",
                  {
                    class: (0, r.C_)([
                      "tweet-container",
                      { border: !e.isPreviousReply, new: e.isNewNotification },
                    ]),
                    onClick:
                      l[6] || (l[6] = (e) => (0, i.SU)(J).viewTweet(t.id)),
                  },
                  [
                    "retweet" === t.type && t.retweetedBy
                      ? ((0, s.wg)(),
                        (0, s.iD)("div", v, [
                          (0, s.Wm)(o, {
                            name: "la-retweet-solid",
                            scale: "0.89",
                            fill: "#ffffff80",
                          }),
                          (0, s.Uk)(
                            " " + (0, r.zw)(t.retweetedBy) + " Retweeted ",
                            1
                          ),
                        ]))
                      : (0, s.kq)("", !0),
                    (0, s._)("div", y, [
                      (0, s._)("div", k, [
                        (0, s.Wm)(
                          c.Z,
                          {
                            url: t.user.avatarUrl,
                            size: 48,
                            onClick:
                              l[0] ||
                              (l[0] = (0, n.iM)(
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
                          ? ((0, s.wg)(), (0, s.iD)("div", g))
                          : (0, s.kq)("", !0),
                      ]),
                      (0, s._)("div", U, [
                        (0, s._)("div", _, [
                          (0, s._)("div", S, [
                            (0, s._)(
                              "span",
                              {
                                class: "display-name",
                                onClick:
                                  l[1] ||
                                  (l[1] = (0, n.iM)(
                                    (e) =>
                                      (0, i.SU)(J).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [(0, s._)("a", null, (0, r.zw)(t.user.name), 1)]
                            ),
                            (0, s._)(
                              "span",
                              {
                                class: "username gray-text",
                                onClick:
                                  l[2] ||
                                  (l[2] = (0, n.iM)(
                                    (e) =>
                                      (0, i.SU)(J).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [
                                (0, s._)(
                                  "a",
                                  null,
                                  "@" + (0, r.zw)(t.user.username),
                                  1
                                ),
                              ]
                            ),
                            C,
                            (0, s._)("span", h, (0, r.zw)(te.value), 1),
                          ]),
                          (0, s._)(
                            "span",
                            {
                              class: "tweet-action-icon extra-btn",
                              onClick: (0, n.iM)(re, ["stop"]),
                            },
                            [
                              (0, s.Wm)(o, {
                                name: "hi-dots-horizontal",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                              X.value
                                ? ((0, s.wg)(), (0, s.iD)("div", x))
                                : (0, s.kq)("", !0),
                              X.value
                                ? ((0, s.wg)(),
                                  (0, s.iD)("div", D, [
                                    (0, s._)("ul", T, [
                                      (0, i.SU)(J).currentId == t.user.id ||
                                      (0, i.SU)(J).currentUser.isAdmin
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                            "li",
                                            {
                                              key: 0,
                                              class:
                                                "tweet-menu-item delete-tweet",
                                              onClick: ie,
                                            },
                                            [
                                              (0, s._)("span", I, [
                                                (0, s.Wm)(o, {
                                                  name: "bi-trash",
                                                  scale: "1.1",
                                                  fill: "red",
                                                }),
                                              ]),
                                              (0, s.Uk)("Delete "),
                                            ]
                                          ))
                                        : (0, s.kq)("", !0),
                                      (0, i.SU)(V).canFollow(
                                        (0, i.SU)(J).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                            "li",
                                            {
                                              key: 1,
                                              class: "tweet-menu-item",
                                              onClick:
                                                l[3] ||
                                                (l[3] = (e) =>
                                                  (0, i.SU)(V).followUser(
                                                    (0, i.SU)(J).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, s._)("span", M, [
                                                (0, s.Wm)(o, {
                                                  name: "co-user-follow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, s.Uk)(
                                                "Follow @" +
                                                  (0, r.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, s.kq)("", !0),
                                      (0, i.SU)(V).canUnfollow(
                                        (0, i.SU)(J).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                            "li",
                                            {
                                              key: 2,
                                              class: "tweet-menu-item",
                                              onClick:
                                                l[4] ||
                                                (l[4] = (e) =>
                                                  (0, i.SU)(V).unfollowUser(
                                                    (0, i.SU)(J).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, s._)("span", q, [
                                                (0, s.Wm)(o, {
                                                  name: "co-user-unfollow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, s.Uk)(
                                                "Unfollow @" +
                                                  (0, r.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, s.kq)("", !0),
                                      z,
                                    ]),
                                  ]))
                                : (0, s.kq)("", !0),
                            ],
                            8,
                            b
                          ),
                        ]),
                        (0, s._)("div", P, [
                          "reply" === t.tweet.type && t.tweet.replyingToTweet
                            ? ((0, s.wg)(),
                              (0, s.iD)("div", W, [
                                H,
                                (0, s._)(
                                  "a",
                                  {
                                    class: "blue-link",
                                    onClick:
                                      l[5] ||
                                      (l[5] = (0, n.iM)(
                                        (e) =>
                                          (0, i.SU)(J).viewUserProfile(
                                            t.replyingTo
                                          ),
                                        ["stop"]
                                      )),
                                  },
                                  "@" + (0, r.zw)(t.replyingTo),
                                  1
                                ),
                              ]))
                            : (0, s.kq)("", !0),
                          (0, s._)("div", B, [
                            (0, s.Wm)(u.Z, { text: t.tweet.text }, null, 8, [
                              "text",
                            ]),
                          ]),
                          t.tweet.media.length > 0
                            ? ((0, s.wg)(),
                              (0, s.iD)(
                                "div",
                                {
                                  key: 1,
                                  class: (0, r.C_)([
                                    "tweet-media",
                                    [(0, i.SU)(d.YM)(t.tweet.media)],
                                  ]),
                                },
                                [
                                  ((0, s.wg)(!0),
                                  (0, s.iD)(
                                    s.HY,
                                    null,
                                    (0, s.Ko)(
                                      t.tweet.media,
                                      (e) => (
                                        (0, s.wg)(),
                                        (0, s.iD)(
                                          "div",
                                          {
                                            class: "image-preview-wrapper",
                                            key: t.tweet.media.indexOf(e),
                                          },
                                          [
                                            (0, s._)(
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
                            : (0, s.kq)("", !0),
                        ]),
                        (0, s._)("div", R, [
                          (0, s._)("span", F, [
                            (0, s._)(
                              "span",
                              {
                                class: "tweet-action-icon reply-btn",
                                onClick: (0, n.iM)(oe, ["stop"]),
                              },
                              [
                                (0, s.Wm)(o, {
                                  name: "fa-regular-comment",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              8,
                              L
                            ),
                            (0, s._)(
                              "span",
                              $,
                              (0, r.zw)(
                                t.tweet.repliesFrom.length > 0
                                  ? t.tweet.repliesFrom.length
                                  : ""
                              ),
                              1
                            ),
                          ]),
                          (0, s._)("span", j, [
                            (0, s._)(
                              "span",
                              {
                                class: (0, r.C_)([
                                  "tweet-action-icon retweet-btn",
                                  { retweeted: (0, i.SU)(se) },
                                ]),
                                onClick: (0, n.iM)(le, ["stop"]),
                              },
                              [
                                (0, s.Wm)(o, {
                                  name: "la-retweet-solid",
                                  scale: "1.15",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              A
                            ),
                            (0, s._)(
                              "span",
                              E,
                              (0, r.zw)(t.tweet.retweetCount || ""),
                              1
                            ),
                          ]),
                          (0, s._)("span", O, [
                            (0, s._)(
                              "span",
                              {
                                class: (0, r.C_)([
                                  "tweet-action-icon like-btn",
                                  { liked: (0, i.SU)(ae) },
                                ]),
                                onClick: (0, n.iM)(ne, ["stop"]),
                              },
                              [
                                (0, s.Wm)(o, {
                                  name: "fa-regular-heart",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              N
                            ),
                            (0, s._)(
                              "span",
                              Y,
                              (0, r.zw)(t.tweet.likeCount || ""),
                              1
                            ),
                          ]),
                          (0, s._)(
                            "span",
                            {
                              class: "tweet-action-icon share-tweet-btn",
                              onClick: (0, n.iM)(ce, ["stop"]),
                            },
                            [
                              (0, s.Wm)(o, {
                                name: "gi-share",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                            ],
                            8,
                            K
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
//# sourceMappingURL=927.c764746a.js.map
