"use strict";
(self["webpackChunkchitter"] = self["webpackChunkchitter"] || []).push([
  [539],
  {
    4539: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return q;
          },
        });
      var i = r(3396),
        s = r(4870),
        n = r(9327),
        a = r(988),
        l = r(9242),
        o = r(7925),
        c = r(4621),
        w = r(7139),
        u = r(8341);
      const d = { class: "icon-container" },
        f = { key: 0, class: "notif-icon" },
        m = { key: 1, class: "notif-icon" },
        p = { key: 2, class: "notif-icon" },
        U = { class: "notif-body" },
        g = { class: "notif-text" },
        y = { class: "tweet-text gray-text" },
        v = { key: 0 };
      var k = {
        __name: "NotificationCard",
        props: {
          type: String,
          id: String,
          userId: String,
          avatarUrl: String,
          name: String,
          username: String,
          tweetText: String,
          containsMedia: Boolean,
          isNew: Boolean,
        },
        setup(e) {
          const t = e,
            r = (0, n.q)(),
            a = (0, i.Fl)(() => {
              switch (t.type) {
                case "like-origin":
                  return " liked your Tweet";
                case "like-retweet":
                  return " liked your Retweet";
                case "retweet-origin":
                  return " Retweeted your Tweet";
                case "retweet-retweet":
                  return " Retweeted your Retweet";
                default:
                  return " followed you";
              }
            }),
            l = (0, i.Fl)(() => ` pic.chitter.com/${t.id}`),
            o = (0, i.Fl)(
              () => "like-origin" === t.type || "like-retweet" === t.type
            ),
            c = (0, i.Fl)(
              () => "retweet-origin" === t.type || "retweet-retweet" === t.type
            );
          function k() {
            "follow" === t.type
              ? r.viewUserProfile(t.username)
              : r.viewTweet(t.id);
          }
          return (r, n) => {
            const S = (0, i.up)("v-icon");
            return (
              (0, i.wg)(),
              (0, i.iD)(
                "div",
                {
                  class: (0, w.C_)(["notif-container", { new: e.isNew }]),
                  onClick: k,
                },
                [
                  (0, i._)("div", d, [
                    (0, s.SU)(o)
                      ? ((0, i.wg)(),
                        (0, i.iD)("span", f, [
                          (0, i.Wm)(S, {
                            name: "bi-heart-fill",
                            scale: "1.6",
                            fill: "#e21c68",
                          }),
                        ]))
                      : (0, s.SU)(c)
                      ? ((0, i.wg)(),
                        (0, i.iD)("span", m, [
                          (0, i.Wm)(S, {
                            name: "la-retweet-solid",
                            scale: "1.6",
                            fill: "#10d3a9",
                          }),
                        ]))
                      : "follow" === t.type
                      ? ((0, i.wg)(),
                        (0, i.iD)("span", p, [
                          (0, i.Wm)(S, {
                            name: "io-person",
                            scale: "1.5",
                            fill: "#14b5f5",
                          }),
                        ]))
                      : (0, i.kq)("", !0),
                  ]),
                  (0, i._)("div", U, [
                    (0, i.Wm)(u.Z, { url: t.avatarUrl, size: 32 }, null, 8, [
                      "url",
                    ]),
                    (0, i._)("div", g, [
                      (0, i._)("strong", null, (0, w.zw)(t.name), 1),
                      (0, i.Uk)((0, w.zw)((0, s.SU)(a)), 1),
                    ]),
                    (0, i._)("div", y, [
                      (0, i.Uk)((0, w.zw)(t.tweetText), 1),
                      e.containsMedia
                        ? ((0, i.wg)(),
                          (0, i.iD)("span", v, (0, w.zw)((0, s.SU)(l)), 1))
                        : (0, i.kq)("", !0),
                    ]),
                  ]),
                ],
                2
              )
            );
          };
        },
      };
      const S = k;
      var _ = S;
      const C = { class: "notif-list" },
        I = { key: 1, class: "error gray-text" };
      var x = {
          __name: "NotificationList",
          props: { notifs: Array },
          setup(e) {
            const t = e,
              r = (0, o.g)(),
              w = (0, n.q)(),
              u = (0, a.U)();
            return (e, n) => (
              (0, i.wg)(),
              (0, i.iD)("div", C, [
                t.notifs.length > 0
                  ? ((0, i.wg)(),
                    (0, i.j4)(
                      l.W3,
                      { key: 0, name: "fade-down" },
                      {
                        default: (0, i.w5)(() => [
                          ((0, i.wg)(!0),
                          (0, i.iD)(
                            i.HY,
                            null,
                            (0, i.Ko)(
                              t.notifs,
                              (e, t) => (
                                (0, i.wg)(),
                                (0, i.iD)(
                                  i.HY,
                                  null,
                                  [
                                    "reply" === e.type
                                      ? ((0, i.wg)(),
                                        (0, i.j4)(
                                          c.Z,
                                          {
                                            key: t,
                                            id: e.tweetId,
                                            user: {
                                              id: e.fromUser,
                                              name: (0, s.SU)(u).getUser(
                                                e.fromUser
                                              ).name,
                                              username: (0, s.SU)(u).getUser(
                                                e.fromUser
                                              ).username,
                                              avatarUrl: (0, s.SU)(u).getUser(
                                                e.fromUser
                                              ).avatarUrl,
                                            },
                                            tweet: (0, s.SU)(r).getTweet(
                                              e.tweetId
                                            ),
                                            type: "reply",
                                            replyingTo: (0, s.SU)(w).currentUser
                                              .username,
                                            isNewNotification: (0, s.SU)(
                                              u
                                            ).tweetIsNewNotification(
                                              (0, s.SU)(w).currentId,
                                              e.tweetId
                                            ),
                                          },
                                          null,
                                          8,
                                          [
                                            "id",
                                            "user",
                                            "tweet",
                                            "replyingTo",
                                            "isNewNotification",
                                          ]
                                        ))
                                      : "mention" === e.type
                                      ? ((0, i.wg)(),
                                        (0, i.j4)(
                                          c.Z,
                                          {
                                            key: t,
                                            id: e.tweetId,
                                            user: {
                                              id: e.fromUser,
                                              name: (0, s.SU)(u).getUser(
                                                e.fromUser
                                              ).name,
                                              username: (0, s.SU)(u).getUser(
                                                e.fromUser
                                              ).username,
                                              avatarUrl: (0, s.SU)(u).getUser(
                                                e.fromUser
                                              ).avatarUrl,
                                            },
                                            tweet: (0, s.SU)(r).getTweet(
                                              e.tweetId
                                            ),
                                            type: "status",
                                            isNewNotification: (0, s.SU)(
                                              u
                                            ).tweetIsNewNotification(
                                              (0, s.SU)(w).currentId,
                                              e.tweetId
                                            ),
                                          },
                                          null,
                                          8,
                                          [
                                            "id",
                                            "user",
                                            "tweet",
                                            "isNewNotification",
                                          ]
                                        ))
                                      : "reply" !== e.type &&
                                        "follow" !== e.type
                                      ? ((0, i.wg)(),
                                        (0, i.j4)(
                                          _,
                                          {
                                            key: t,
                                            id: e.tweetId,
                                            type: e.type,
                                            avatarUrl: (0, s.SU)(u).getUser(
                                              e.fromUser
                                            ).avatarUrl,
                                            name: (0, s.SU)(u).getUser(
                                              e.fromUser
                                            ).name,
                                            username: (0, s.SU)(u).getUser(
                                              e.fromUser
                                            ).username,
                                            tweetText: (0, s.SU)(r).getTweet(
                                              e.tweetId
                                            ).text,
                                            containsMedia:
                                              (0, s.SU)(r).getTweet(e.tweetId)
                                                .media.length > 0,
                                            isNew: (0, s.SU)(
                                              u
                                            ).isNewNotification(
                                              (0, s.SU)(w).currentId,
                                              e
                                            ),
                                          },
                                          null,
                                          8,
                                          [
                                            "id",
                                            "type",
                                            "avatarUrl",
                                            "name",
                                            "username",
                                            "tweetText",
                                            "containsMedia",
                                            "isNew",
                                          ]
                                        ))
                                      : ((0, i.wg)(),
                                        (0, i.j4)(
                                          _,
                                          {
                                            key: t,
                                            type: e.type,
                                            userId: (0, s.SU)(u).getUser(
                                              e.fromUser
                                            ).id,
                                            avatarUrl: (0, s.SU)(u).getUser(
                                              e.fromUser
                                            ).avatarUrl,
                                            name: (0, s.SU)(u).getUser(
                                              e.fromUser
                                            ).name,
                                            username: (0, s.SU)(u).getUser(
                                              e.fromUser
                                            ).username,
                                            isNew: (0, s.SU)(
                                              u
                                            ).isNewNotification(
                                              (0, s.SU)(w).currentId,
                                              e
                                            ),
                                          },
                                          null,
                                          8,
                                          [
                                            "type",
                                            "userId",
                                            "avatarUrl",
                                            "name",
                                            "username",
                                            "isNew",
                                          ]
                                        )),
                                  ],
                                  64
                                )
                              )
                            ),
                            256
                          )),
                        ]),
                        _: 1,
                      }
                    ))
                  : ((0, i.wg)(),
                    (0, i.iD)("div", I, "No notifications to display")),
              ])
            );
          },
        },
        b = r(89);
      const T = (0, b.Z)(x, [["__scopeId", "data-v-177cbf85"]]);
      var h = T;
      const D = { class: "tweet-list-container" };
      var N = {
        __name: "NotificationMain",
        setup(e) {
          const t = (0, n.q)(),
            r = (0, a.U)(),
            l = (0, i.Fl)(() => r.getAllNotifications(t.currentId));
          async function o(e) {
            await new Promise((t) => {
              setTimeout(() => {}, e);
            });
          }
          return (
            (0, i.bv)(() => {
              o(0);
            }),
            (0, i.Ah)(() => {
              r.clearNotifications(t.currentId);
            }),
            (e, t) => (
              (0, i.wg)(),
              (0, i.iD)("div", D, [
                (0, i.Wm)(h, { notifs: (0, s.SU)(l) }, null, 8, ["notifs"]),
              ])
            )
          );
        },
      };
      const M = N;
      var q = M;
    },
    1187: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = r(3396),
        s = r(4870),
        n = r(9707),
        a = r(9327);
      const l = ["innerHTML"];
      var o = {
          __name: "EmbeddedText",
          props: ["text"],
          setup(e) {
            const t = e,
              r = (0, s.iH)(null),
              o = (0, a.q)(),
              c = () => {
                if (!t.text || 0 === t.text.length) return;
                const e = t.text.split(" ").map((e) => {
                  const t = e.split(/\r?\n/);
                  switch (!0) {
                    case n.yV.test(e):
                      return `<a class="blue-link" href="${e}" target="_blank">${e}</a>`;
                    case n.nC.test(e):
                      return `<a class="blue-link">${e}</a>`;
                    case t.some((e) => n.PH.test(e)):
                      return t
                        .map((r) =>
                          n.PH.test(r)
                            ? `<a class="blue-link user-link" data-username=${e.replace(
                                "@",
                                ""
                              )}>${t.filter((e) => n.PH.test(e))[0]}</a>`
                            : r
                        )
                        .join("\n");
                    default:
                      return e;
                  }
                });
                return e.join(" ");
              };
            return (
              (0, i.bv)(() => {
                const e = r.value.querySelectorAll(".user-link");
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
                (0, i.wg)(),
                (0, i.iD)(
                  "div",
                  { ref_key: "textEl", ref: r, innerHTML: c() },
                  null,
                  8,
                  l
                )
              )
            );
          },
        },
        c = r(89);
      const w = (0, c.Z)(o, [["__scopeId", "data-v-6a7454c8"]]);
      var u = w;
    },
    4621: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return G;
        },
      });
      var i = r(3396),
        s = r(7139),
        n = r(4870),
        a = r(9242),
        l = r(5743),
        o = r.n(l),
        c = r(8341),
        w = r(1187),
        u = r(1172),
        d = r(9707),
        f = r(7925),
        m = r(9327),
        p = r(988);
      const U = { key: 0, class: "user-retweet gray-text" },
        g = { class: "tweet-body" },
        y = { class: "profile-pic-container" },
        v = { key: 0, class: "gray-line" },
        k = { class: "tweet-data" },
        S = { class: "user-info-and-btn" },
        _ = { class: "user-info-wrapper" },
        C = (0, i._)("span", { class: "separator gray-text" }, "·", -1),
        I = { class: "tweet-time gray-text" },
        x = ["onClick"],
        b = { key: 0, class: "overlay" },
        T = { key: 1, class: "tweet-menu-container" },
        h = { class: "tweet-menu-list" },
        D = { class: "tweet-menu-icon" },
        N = { class: "tweet-menu-icon" },
        M = { class: "tweet-menu-icon" },
        q = (0, i._)("button", { class: "cancel-btn" }, "Cancel", -1),
        z = { class: "tweet-content" },
        W = { key: 0, class: "replying-to" },
        P = (0, i._)("span", { class: "gray-text" }, "Replying to ", -1),
        R = { class: "tweet-text" },
        H = ["src"],
        Z = { class: "tweet-actions-wrapper" },
        F = { class: "tweet-metrics" },
        j = ["onClick"],
        B = { class: "tweet-metric reply-metric gray-text" },
        $ = { class: "tweet-metrics" },
        L = ["onClick"],
        A = { class: "tweet-metric retweet-metric gray-text" },
        E = { class: "tweet-metrics" },
        O = ["onClick"],
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
            J = (0, m.q)(),
            V = (0, p.U)();
          var G = r(893);
          o().extend(G);
          let Q = null;
          const X = (0, n.iH)(!1),
            ee = (0, n.iH)(o()().toISOString()),
            te = (0, n.iH)(u.Z.formatTweetDate(t.tweet.timestamp, ee.value)),
            re = (0, i.Fl)(() => l.hasLiked(t.tweet.id, J.currentId)),
            ie = (0, i.Fl)(() => l.hasRetweeted(t.tweet.id, J.currentId)),
            se = () => {
              J.currentUser && (X.value = !X.value);
            },
            ne = () => {
              l.removeTweet(t.id, t.user.id);
            },
            ae = () => {
              re.value
                ? l.removeLike(t.id, J.currentId)
                : l.addLike(t.id, J.currentId, t.retweetedBy);
            },
            le = () => {
              ie.value
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
            (0, i.bv)(() => {
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
            (0, i.Jd)(() => {
              clearInterval(Q);
            }),
            (r, l) => {
              const o = (0, i.up)("v-icon");
              return (
                (0, i.wg)(),
                (0, i.iD)(
                  "div",
                  {
                    class: (0, s.C_)([
                      "tweet-container",
                      { border: !e.isPreviousReply, new: e.isNewNotification },
                    ]),
                    onClick:
                      l[6] || (l[6] = (e) => (0, n.SU)(J).viewTweet(t.id)),
                  },
                  [
                    "retweet" === t.type && t.retweetedBy
                      ? ((0, i.wg)(),
                        (0, i.iD)("div", U, [
                          (0, i.Wm)(o, {
                            name: "la-retweet-solid",
                            scale: "0.89",
                            fill: "#ffffff80",
                          }),
                          (0, i.Uk)(
                            " " + (0, s.zw)(t.retweetedBy) + " Retweeted ",
                            1
                          ),
                        ]))
                      : (0, i.kq)("", !0),
                    (0, i._)("div", g, [
                      (0, i._)("div", y, [
                        (0, i.Wm)(
                          c.Z,
                          {
                            url: t.user.avatarUrl,
                            size: 48,
                            onClick:
                              l[0] ||
                              (l[0] = (0, a.iM)(
                                (e) =>
                                  (0, n.SU)(J).viewUserProfile(t.user.username),
                                ["stop"]
                              )),
                          },
                          null,
                          8,
                          ["url"]
                        ),
                        e.isPreviousReply
                          ? ((0, i.wg)(), (0, i.iD)("div", v))
                          : (0, i.kq)("", !0),
                      ]),
                      (0, i._)("div", k, [
                        (0, i._)("div", S, [
                          (0, i._)("div", _, [
                            (0, i._)(
                              "span",
                              {
                                class: "display-name",
                                onClick:
                                  l[1] ||
                                  (l[1] = (0, a.iM)(
                                    (e) =>
                                      (0, n.SU)(J).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [(0, i._)("a", null, (0, s.zw)(t.user.name), 1)]
                            ),
                            (0, i._)(
                              "span",
                              {
                                class: "username gray-text",
                                onClick:
                                  l[2] ||
                                  (l[2] = (0, a.iM)(
                                    (e) =>
                                      (0, n.SU)(J).viewUserProfile(
                                        t.user.username
                                      ),
                                    ["stop"]
                                  )),
                              },
                              [
                                (0, i._)(
                                  "a",
                                  null,
                                  "@" + (0, s.zw)(t.user.username),
                                  1
                                ),
                              ]
                            ),
                            C,
                            (0, i._)("span", I, (0, s.zw)(te.value), 1),
                          ]),
                          (0, i._)(
                            "span",
                            {
                              class: "tweet-action-icon extra-btn",
                              onClick: (0, a.iM)(se, ["stop"]),
                            },
                            [
                              (0, i.Wm)(o, {
                                name: "hi-dots-horizontal",
                                scale: "1.0",
                                fill: "#ffffff80",
                              }),
                              X.value
                                ? ((0, i.wg)(), (0, i.iD)("div", b))
                                : (0, i.kq)("", !0),
                              X.value
                                ? ((0, i.wg)(),
                                  (0, i.iD)("div", T, [
                                    (0, i._)("ul", h, [
                                      (0, n.SU)(J).currentId == t.user.id ||
                                      (0, n.SU)(J).currentUser.isAdmin
                                        ? ((0, i.wg)(),
                                          (0, i.iD)(
                                            "li",
                                            {
                                              key: 0,
                                              class:
                                                "tweet-menu-item delete-tweet",
                                              onClick: ne,
                                            },
                                            [
                                              (0, i._)("span", D, [
                                                (0, i.Wm)(o, {
                                                  name: "bi-trash",
                                                  scale: "1.1",
                                                  fill: "red",
                                                }),
                                              ]),
                                              (0, i.Uk)("Delete "),
                                            ]
                                          ))
                                        : (0, i.kq)("", !0),
                                      (0, n.SU)(V).canFollow(
                                        (0, n.SU)(J).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, i.wg)(),
                                          (0, i.iD)(
                                            "li",
                                            {
                                              key: 1,
                                              class: "tweet-menu-item",
                                              onClick:
                                                l[3] ||
                                                (l[3] = (e) =>
                                                  (0, n.SU)(V).followUser(
                                                    (0, n.SU)(J).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, i._)("span", N, [
                                                (0, i.Wm)(o, {
                                                  name: "co-user-follow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, i.Uk)(
                                                "Follow @" +
                                                  (0, s.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, i.kq)("", !0),
                                      (0, n.SU)(V).canUnfollow(
                                        (0, n.SU)(J).currentUser,
                                        t.user.id
                                      )
                                        ? ((0, i.wg)(),
                                          (0, i.iD)(
                                            "li",
                                            {
                                              key: 2,
                                              class: "tweet-menu-item",
                                              onClick:
                                                l[4] ||
                                                (l[4] = (e) =>
                                                  (0, n.SU)(V).unfollowUser(
                                                    (0, n.SU)(J).currentId,
                                                    t.user.id
                                                  )),
                                            },
                                            [
                                              (0, i._)("span", M, [
                                                (0, i.Wm)(o, {
                                                  name: "co-user-unfollow",
                                                  scale: "1.1",
                                                  fill: "#ffffff80",
                                                }),
                                              ]),
                                              (0, i.Uk)(
                                                "Unfollow @" +
                                                  (0, s.zw)(t.user.username),
                                                1
                                              ),
                                            ]
                                          ))
                                        : (0, i.kq)("", !0),
                                      q,
                                    ]),
                                  ]))
                                : (0, i.kq)("", !0),
                            ],
                            8,
                            x
                          ),
                        ]),
                        (0, i._)("div", z, [
                          "reply" === t.tweet.type && t.tweet.replyingToTweet
                            ? ((0, i.wg)(),
                              (0, i.iD)("div", W, [
                                P,
                                (0, i._)(
                                  "a",
                                  {
                                    class: "blue-link",
                                    onClick:
                                      l[5] ||
                                      (l[5] = (0, a.iM)(
                                        (e) =>
                                          (0, n.SU)(J).viewUserProfile(
                                            t.replyingTo
                                          ),
                                        ["stop"]
                                      )),
                                  },
                                  "@" + (0, s.zw)(t.replyingTo),
                                  1
                                ),
                              ]))
                            : (0, i.kq)("", !0),
                          (0, i._)("div", R, [
                            (0, i.Wm)(w.Z, { text: t.tweet.text }, null, 8, [
                              "text",
                            ]),
                          ]),
                          t.tweet.media.length > 0
                            ? ((0, i.wg)(),
                              (0, i.iD)(
                                "div",
                                {
                                  key: 1,
                                  class: (0, s.C_)([
                                    "tweet-media",
                                    [(0, n.SU)(d.YM)(t.tweet.media)],
                                  ]),
                                },
                                [
                                  ((0, i.wg)(!0),
                                  (0, i.iD)(
                                    i.HY,
                                    null,
                                    (0, i.Ko)(
                                      t.tweet.media,
                                      (e) => (
                                        (0, i.wg)(),
                                        (0, i.iD)(
                                          "div",
                                          {
                                            class: "image-preview-wrapper",
                                            key: t.tweet.media.indexOf(e),
                                          },
                                          [
                                            (0, i._)(
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
                            : (0, i.kq)("", !0),
                        ]),
                        (0, i._)("div", Z, [
                          (0, i._)("span", F, [
                            (0, i._)(
                              "span",
                              {
                                class: "tweet-action-icon reply-btn",
                                onClick: (0, a.iM)(oe, ["stop"]),
                              },
                              [
                                (0, i.Wm)(o, {
                                  name: "fa-regular-comment",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              8,
                              j
                            ),
                            (0, i._)(
                              "span",
                              B,
                              (0, s.zw)(
                                t.tweet.repliesFrom.length > 0
                                  ? t.tweet.repliesFrom.length
                                  : ""
                              ),
                              1
                            ),
                          ]),
                          (0, i._)("span", $, [
                            (0, i._)(
                              "span",
                              {
                                class: (0, s.C_)([
                                  "tweet-action-icon retweet-btn",
                                  { retweeted: (0, n.SU)(ie) },
                                ]),
                                onClick: (0, a.iM)(le, ["stop"]),
                              },
                              [
                                (0, i.Wm)(o, {
                                  name: "la-retweet-solid",
                                  scale: "1.15",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              L
                            ),
                            (0, i._)(
                              "span",
                              A,
                              (0, s.zw)(t.tweet.retweetCount || ""),
                              1
                            ),
                          ]),
                          (0, i._)("span", E, [
                            (0, i._)(
                              "span",
                              {
                                class: (0, s.C_)([
                                  "tweet-action-icon like-btn",
                                  { liked: (0, n.SU)(re) },
                                ]),
                                onClick: (0, a.iM)(ae, ["stop"]),
                              },
                              [
                                (0, i.Wm)(o, {
                                  name: "fa-regular-heart",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ],
                              10,
                              O
                            ),
                            (0, i._)(
                              "span",
                              Y,
                              (0, s.zw)(t.tweet.likeCount || ""),
                              1
                            ),
                          ]),
                          (0, i._)(
                            "span",
                            {
                              class: "tweet-action-icon share-tweet-btn",
                              onClick: (0, a.iM)(ce, ["stop"]),
                            },
                            [
                              (0, i.Wm)(o, {
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
//# sourceMappingURL=539.e50396a0.js.map
