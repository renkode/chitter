"use strict";
(self["webpackChunkchitter"] = self["webpackChunkchitter"] || []).push([
  [386],
  {
    4386: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = s(3396),
        i = s(4870),
        r = s(9242),
        l = s(988),
        n = s(2664);
      const o = { class: "tweet-list" },
        c = { key: 1, class: "error gray-text" };
      var w = {
        __name: "TweetList",
        props: { tweets: Array },
        setup(e) {
          const t = e,
            s = (0, l.U)(),
            w = (0, a.Fl)(() =>
              t.tweets.filter(
                (e) => "undefined" !== typeof e && "undefined" !== typeof e.data
              )
            );
          return (e, t) => (
            (0, a.wg)(),
            (0, a.iD)("div", o, [
              (0, i.SU)(w) && (0, i.SU)(w).length > 0
                ? ((0, a.wg)(),
                  (0, a.j4)(
                    r.W3,
                    { key: 0, name: "fade-down" },
                    {
                      default: (0, a.w5)(() => [
                        ((0, a.wg)(!0),
                        (0, a.iD)(
                          a.HY,
                          null,
                          (0, a.Ko)(
                            (0, i.SU)(w),
                            (e) => (
                              (0, a.wg)(),
                              (0, a.j4)(
                                n.Z,
                                {
                                  key: e.data.id,
                                  id: e.data.id,
                                  user: (0, i.SU)(s).getUser(e.data.authorId),
                                  tweet: e.data,
                                  type: e.type,
                                  retweetedBy: e.retweetedBy,
                                  replyingTo: (0, i.SU)(s).getUsername(
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
                : ((0, a.wg)(), (0, a.iD)("div", c, "No tweets to display")),
            ])
          );
        },
      };
      const u = w;
      var d = u;
    },
    116: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = s(3396),
        i = s(4870),
        r = s(9707),
        l = s(9327);
      const n = ["innerHTML"];
      var o = {
          __name: "EmbeddedText",
          props: ["text"],
          setup(e) {
            const t = e,
              s = (0, i.iH)(null),
              o = (0, l.q)(),
              c = (0, a.Fl)(() => {
                if (!t.text || 0 === t.text.length) return;
                const e = t.text.split(" ").map((e) => {
                  switch (!0) {
                    case r.yV.test(e):
                      return `<a class="blue-link" href="${e}" target="_blank">${e}</a>`;
                    case r.nC.test(e):
                      return `<a class="blue-link">${e}</a>`;
                    case r.PH.test(e.split(/\r?\n/)[0]):
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
              (0, a.bv)(() => {
                const e = s.value.querySelectorAll(".user-link");
                Array.from(e).forEach((e) =>
                  e.addEventListener("click", function t(s) {
                    s.stopPropagation(),
                      o.viewUserProfile(e.dataset.username),
                      this.removeEventListener("click", t);
                  })
                );
              }),
              (0, a.YP)(s, () => {}),
              (e, t) => (
                (0, a.wg)(),
                (0, a.iD)(
                  "div",
                  { ref_key: "textEl", ref: s, innerHTML: (0, i.SU)(c) },
                  null,
                  8,
                  n
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
      var a = s(3396),
        i = s(7139),
        r = s(4870),
        l = s(9242),
        n = s(5743),
        o = s.n(n),
        c = s(8341),
        w = s(116),
        u = s(1172),
        d = s(9707),
        f = s(7925),
        p = s(9327),
        m = s(988);
      const v = { key: 0, class: "user-retweet gray-text" },
        y = { class: "tweet-body" },
        k = { class: "profile-pic-container" },
        g = { key: 0, class: "gray-line" },
        _ = { class: "tweet-data" },
        U = { class: "user-info-and-btn" },
        C = { class: "user-info-wrapper" },
        S = (0, a._)("span", { class: "separator gray-text" }, "·", -1),
        h = { class: "tweet-time gray-text" },
        b = ["onClick"],
        x = { key: 0, class: "overlay" },
        T = { key: 1, class: "tweet-menu-container" },
        D = { class: "tweet-menu-list" },
        M = { class: "tweet-menu-icon" },
        I = { class: "tweet-menu-icon" },
        q = { class: "tweet-menu-icon" },
        z = (0, a._)("button", { class: "cancel-btn" }, "Cancel", -1),
        W = { class: "tweet-content" },
        P = { key: 0, class: "replying-to" },
        B = (0, a._)("span", { class: "gray-text" }, "Replying to ", -1),
        Z = { class: "tweet-text" },
        H = ["src"],
        R = { class: "tweet-actions-wrapper" },
        F = { class: "tweet-metrics" },
        L = ["onClick"],
        $ = { class: "tweet-metric reply-metric gray-text" },
        j = { class: "tweet-metrics" },
        A = ["onClick"],
        E = { class: "tweet-metric retweet-metric gray-text" },
        O = { class: "tweet-metrics" },
        Y = ["onClick"],
        N = { class: "tweet-metric like-metric gray-text" },
        K = ["onClick"];
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
            n = (0, f.g)(),
            V = (0, p.q)(),
            G = (0, m.U)();
          var J = s(893);
          o().extend(J);
          let Q = null;
          const X = (0, r.iH)(!1),
            ee = (0, r.iH)(o()().toISOString()),
            te = (0, r.iH)(u.Z.formatTweetDate(t.tweet.timestamp, ee.value)),
            se = (0, a.Fl)(() => n.hasLiked(t.tweet.id, V.currentId)),
            ae = (0, a.Fl)(() => n.hasRetweeted(t.tweet.id, V.currentId)),
            ie = () => {
              X.value = !X.value;
            },
            re = () => {
              n.removeTweet(t.id, t.user.id);
            },
            le = () => {
              se.value
                ? n.removeLike(t.id, V.currentId)
                : n.addLike(t.id, V.currentId, t.retweetedBy);
            },
            ne = () => {
              ae.value
                ? n.removeRetweet(t.id, V.currentId)
                : n.addRetweet(t.id, V.currentId, t.retweetedBy);
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
            (0, a.Ah)(() => {
              clearInterval(Q);
            }),
            (s, n) => {
              const o = (0, a.up)("v-icon");
              return (
                (0, a.wg)(),
                (0, a.iD)(
                  "div",
                  {
                    class: (0, i.C_)([
                      "tweet-container",
                      { border: !e.isPreviousReply, new: e.isNotification },
                    ]),
                    onClick:
                      n[6] ||
                      (n[6] = (e) => (0, r.SU)(V).setTweetContext(t.id)),
                  },
                  [
                    "retweet" === t.type && t.retweetedBy
                      ? ((0, a.wg)(),
                        (0, a.iD)("div", v, [
                          (0, a.Wm)(o, {
                            name: "la-retweet-solid",
                            scale: "0.89",
                            fill: "#ffffff80",
                          }),
                          (0, a.Uk)(
                            " " + (0, i.zw)(t.retweetedBy) + " Retweeted ",
                            1
                          ),
                        ]))
                      : (0, a.kq)("", !0),
                    (0, a._)("div", y, [
                      (0, a._)("div", k, [
                        (0, a.Wm)(
                          c.Z,
                          {
                            url: t.user.avatarUrl,
                            size: 48,
                            onClick:
                              n[0] ||
                              (n[0] = (0, l.iM)(
                                (e) =>
                                  (0, r.SU)(V).viewUserProfile(t.user.username),
                                ["stop"]
                              )),
                          },
                          null,
                          8,
                          ["url"]
                        ),
                        e.isPreviousReply
                          ? ((0, a.wg)(), (0, a.iD)("div", g))
                          : (0, a.kq)("", !0),
                      ]),
                      (0, a._)("div", _, [
                        (0, a._)("div", U, [
                          (0, a._)("div", C, [
                            (0, a._)(
                              "span",
                              {
                                class: "display-name",
                                onClick:
                                  n[1] ||
                                  (n[1] = (0, l.iM)(
                                    (e) =>
                                      (0, r.SU)(V).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [(0, a._)("a", null, (0, i.zw)(t.user.name), 1)]
                            ),
                            (0, a._)(
                              "span",
                              {
                                class: "username gray-text",
                                onClick:
                                  n[2] ||
                                  (n[2] = (0, l.iM)(
                                    (e) =>
                                      (0, r.SU)(V).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [
                                (0, a._)(
                                  "a",
                                  null,
                                  "@" + (0, i.zw)(t.user.username),
                                  1
                                ),
                              ]
                            ),
                            S,
                            (0, a._)("span", h, (0, i.zw)(te.value), 1),
                          ]),
                          (0, a._)(
                            "span",
                            {
                              class: "tweet-action-icon extra-btn",
                              onClick: (0, l.iM)(ie, ["stop"]),
                            },
                            [
                              (0, a.Wm)(o, {
                                name: "hi-dots-horizontal",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                              X.value
                                ? ((0, a.wg)(), (0, a.iD)("div", x))
                                : (0, a.kq)("", !0),
                              X.value
                                ? ((0, a.wg)(),
                                  (0, a.iD)("div", T, [
                                    (0, a._)("ul", D, [
                                      (0, r.SU)(V).currentId == t.user.id ||
                                      (0, r.SU)(V).currentUser.isAdmin
                                        ? ((0, a.wg)(),
                                          (0, a.iD)(
                                            "li",
                                            {
                                              key: 0,
                                              class:
                                                "tweet-menu-item delete-tweet",
                                              onClick: re,
                                            },
                                            [
                                              (0, a._)("span", M, [
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
                                      (0, r.SU)(G).canFollow(
                                        (0, r.SU)(V).currentUser,
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
                                                  (0, r.SU)(G).followUser(
                                                    (0, r.SU)(V).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, a._)("span", I, [
                                                (0, a.Wm)(o, {
                                                  name: "co-user-follow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, a.Uk)(
                                                "Follow @" +
                                                  (0, i.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, a.kq)("", !0),
                                      (0, r.SU)(G).canUnfollow(
                                        (0, r.SU)(V).currentUser,
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
                                                  (0, r.SU)(G).unfollowUser(
                                                    (0, r.SU)(V).currentId,
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
                                                  (0, i.zw)(t.user.username),
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
                            b
                          ),
                        ]),
                        (0, a._)("div", W, [
                          "reply" === t.tweet.type && t.tweet.replyingToTweet
                            ? ((0, a.wg)(),
                              (0, a.iD)("div", P, [
                                B,
                                (0, a._)(
                                  "a",
                                  {
                                    class: "blue-link",
                                    onClick:
                                      n[5] ||
                                      (n[5] = (0, l.iM)(
                                        (e) =>
                                          (0, r.SU)(V).viewUserProfile(
                                            t.replyingTo
                                          ),
                                        ["stop"]
                                      )),
                                  },
                                  "@" + (0, i.zw)(t.replyingTo),
                                  1
                                ),
                              ]))
                            : (0, a.kq)("", !0),
                          (0, a._)("div", Z, [
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
                                  class: (0, i.C_)([
                                    "tweet-media",
                                    [(0, r.SU)(d.YM)(t.tweet.media)],
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
                                              H
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
                        (0, a._)("div", R, [
                          (0, a._)("span", F, [
                            (0, a._)(
                              "span",
                              {
                                class: "tweet-action-icon reply-btn",
                                onClick: (0, l.iM)(oe, ["stop"]),
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
                              $,
                              (0, i.zw)(
                                t.tweet.repliesFrom.length > 0
                                  ? t.tweet.repliesFrom.length
                                  : ""
                              ),
                              1
                            ),
                          ]),
                          (0, a._)("span", j, [
                            (0, a._)(
                              "span",
                              {
                                class: (0, i.C_)([
                                  "tweet-action-icon retweet-btn",
                                  { retweeted: (0, r.SU)(ae) },
                                ]),
                                onClick: (0, l.iM)(ne, ["stop"]),
                              },
                              [
                                (0, a.Wm)(o, {
                                  name: "la-retweet-solid",
                                  scale: "1.15",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              A
                            ),
                            (0, a._)(
                              "span",
                              E,
                              (0, i.zw)(t.tweet.retweetCount || ""),
                              1
                            ),
                          ]),
                          (0, a._)("span", O, [
                            (0, a._)(
                              "span",
                              {
                                class: (0, i.C_)([
                                  "tweet-action-icon like-btn",
                                  { liked: (0, r.SU)(se) },
                                ]),
                                onClick: (0, l.iM)(le, ["stop"]),
                              },
                              [
                                (0, a.Wm)(o, {
                                  name: "fa-regular-heart",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              Y
                            ),
                            (0, a._)(
                              "span",
                              N,
                              (0, i.zw)(t.tweet.likeCount || ""),
                              1
                            ),
                          ]),
                          (0, a._)(
                            "span",
                            {
                              class: "tweet-action-icon share-tweet-btn",
                              onClick: (0, l.iM)(ce, ["stop"]),
                            },
                            [
                              (0, a.Wm)(o, {
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
      const G = V;
      var J = G;
    },
  },
]);
//# sourceMappingURL=386.2d88f60c.js.map
