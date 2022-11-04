(function () {
  "use strict";
  var e = {
      7625: function (e, t, a) {
        var n = a(9242),
          r = a(2578),
          s = a(1922),
          l = a(1120),
          i = a(3396),
          o = a(4870),
          u = a(7139),
          d = a(9327),
          c = a(988),
          p = a(8341);
        const m = (e) => (
            (0, i.dD)("data-v-40e73f25"), (e = e()), (0, i.Cn)(), e
          ),
          w = { class: "nav-sidebar" },
          v = { class: "nav-item" },
          f = { class: "nav-icon" },
          g = { class: "nav-item" },
          h = { class: "nav-icon" },
          y = m(() => (0, i._)("span", { class: "nav-label" }, "Home", -1)),
          U = { class: "nav-item" },
          b = { class: "nav-icon stroke" },
          _ = m(() => (0, i._)("span", { class: "nav-label" }, "Explore", -1)),
          T = { class: "nav-item" },
          k = { class: "nav-icon notif-icon" },
          S = { key: 0, class: "notification-dot" },
          x = m(() =>
            (0, i._)("span", { class: "nav-label" }, "Notifications", -1)
          ),
          I = { class: "nav-item" },
          C = { class: "nav-icon" },
          F = m(() => (0, i._)("span", { class: "nav-label" }, "Profile", -1)),
          M = { class: "new-tweet-btn-feather" },
          E = m(() =>
            (0, i._)("span", { class: "new-tweet-btn-label" }, "Tweet", -1)
          ),
          L = ["onClick"],
          D = { class: "user-info-and-btn" },
          W = { class: "user-info-wrapper" },
          N = { class: "display-name" },
          q = { class: "username gray-text" },
          Z = { class: "tweet-action-icon extra-btn" },
          j = { key: 0, class: "overlay" },
          H = { key: 1, class: "tweet-menu-container" },
          z = { class: "tweet-menu-list" };
        var A = {
            __name: "MenuSidebar",
            setup(e) {
              (0, c.U)();
              const t = (0, d.q)(),
                a = (0, o.iH)(!1),
                r = (0, i.Fl)(() => t.currentUser.newNotifications.length),
                s = () => {
                  t.setModalType("status"), t.toggleModal();
                },
                l = () => {
                  a.value = !a.value;
                };
              return (e, d) => {
                const c = (0, i.up)("v-icon"),
                  m = (0, i.up)("router-link");
                return (
                  (0, i.wg)(),
                  (0, i.iD)("div", w, [
                    (0, i._)("nav", null, [
                      (0, i._)("ul", null, [
                        (0, i.Wm)(
                          m,
                          { to: "/home", class: "nav-logo" },
                          {
                            default: (0, i.w5)(() => [
                              (0, i._)("li", v, [
                                (0, i._)("span", f, [
                                  (0, i.Wm)(c, {
                                    name: "bi-twitter",
                                    scale: "2.0",
                                    fill: "white",
                                  }),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, i.Wm)(
                          m,
                          { to: "/home" },
                          {
                            default: (0, i.w5)(() => [
                              (0, i._)("li", g, [
                                (0, i._)("span", h, [
                                  (0, i.Wm)(c, {
                                    name: "gi-bird-house",
                                    scale: "2.0",
                                    fill: "#ffffff80",
                                  }),
                                ]),
                                y,
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, i.Wm)(
                          m,
                          { to: "/explore" },
                          {
                            default: (0, i.w5)(() => [
                              (0, i._)("li", U, [
                                (0, i._)("span", b, [
                                  (0, i.Wm)(c, {
                                    name: "hi-hashtag",
                                    scale: "1.6",
                                    fill: "#ffffff80",
                                  }),
                                ]),
                                _,
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, o.SU)(t).currentUser
                          ? ((0, i.wg)(),
                            (0, i.j4)(
                              m,
                              { key: 0, to: "/notifications" },
                              {
                                default: (0, i.w5)(() => [
                                  (0, i._)("li", T, [
                                    (0, i._)("span", k, [
                                      (0, i.Wm)(c, {
                                        name: "bi-bell",
                                        scale: "1.7",
                                        fill: "#ffffff80",
                                      }),
                                      (0, o.SU)(t).currentUser &&
                                      (0, o.SU)(r) > 0
                                        ? ((0, i.wg)(),
                                          (0, i.iD)(
                                            "div",
                                            S,
                                            (0, u.zw)((0, o.SU)(r)),
                                            1
                                          ))
                                        : (0, i.kq)("", !0),
                                    ]),
                                    x,
                                  ]),
                                ]),
                                _: 1,
                              }
                            ))
                          : (0, i.kq)("", !0),
                        (0, o.SU)(t).currentUser
                          ? ((0, i.wg)(),
                            (0, i.j4)(
                              m,
                              {
                                key: 1,
                                to: {
                                  name: "Profile",
                                  params: {
                                    username: (0, o.SU)(t).currentUser.username,
                                  },
                                },
                              },
                              {
                                default: (0, i.w5)(() => [
                                  (0, i._)("li", I, [
                                    (0, i._)("span", C, [
                                      (0, i.Wm)(c, {
                                        name: "bi-person",
                                        scale: "2.0",
                                        fill: "#ffffff80",
                                      }),
                                    ]),
                                    F,
                                  ]),
                                ]),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ))
                          : (0, i.kq)("", !0),
                      ]),
                      (0, i._)(
                        "button",
                        { class: "new-tweet-btn", onClick: s },
                        [
                          (0, i._)("span", M, [
                            (0, i.Wm)(c, { name: "gi-feather", scale: "1.8" }),
                          ]),
                          E,
                        ]
                      ),
                      (0, o.SU)(t).currentUser
                        ? ((0, i.wg)(),
                          (0, i.iD)(
                            "li",
                            {
                              key: 0,
                              class: "nav-user",
                              onClick: (0, n.iM)(l, ["stop"]),
                            },
                            [
                              (0, i._)("div", D, [
                                (0, i.Wm)(
                                  p.Z,
                                  {
                                    url: (0, o.SU)(t).currentUser.avatarUrl,
                                    size: 40,
                                  },
                                  null,
                                  8,
                                  ["url"]
                                ),
                                (0, i._)("div", W, [
                                  (0, i._)(
                                    "span",
                                    N,
                                    (0, u.zw)((0, o.SU)(t).currentUser.name),
                                    1
                                  ),
                                  (0, i._)(
                                    "span",
                                    q,
                                    "@" +
                                      (0, u.zw)(
                                        (0, o.SU)(t).currentUser.username
                                      ),
                                    1
                                  ),
                                ]),
                              ]),
                              (0, i._)("span", Z, [
                                (0, i.Wm)(c, {
                                  name: "hi-dots-horizontal",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ]),
                              a.value
                                ? ((0, i.wg)(), (0, i.iD)("div", j))
                                : (0, i.kq)("", !0),
                              a.value
                                ? ((0, i.wg)(),
                                  (0, i.iD)("div", H, [
                                    (0, i._)("ul", z, [
                                      (0, i._)(
                                        "li",
                                        {
                                          class: "tweet-menu-item",
                                          onClick:
                                            d[0] ||
                                            (d[0] = (...e) =>
                                              (0, o.SU)(t).logOut &&
                                              (0, o.SU)(t).logOut(...e)),
                                        },
                                        " Log out @" +
                                          (0, u.zw)(
                                            (0, o.SU)(t).currentUser.username
                                          ),
                                        1
                                      ),
                                    ]),
                                  ]))
                                : (0, i.kq)("", !0),
                            ],
                            8,
                            L
                          ))
                        : (0, i.kq)("", !0),
                    ]),
                  ])
                );
              };
            },
          },
          V = a(89);
        const R = (0, V.Z)(A, [["__scopeId", "data-v-40e73f25"]]);
        var P = R;
        const O = (e) => (
            (0, i.dD)("data-v-45dbd83c"), (e = e()), (0, i.Cn)(), e
          ),
          B = { class: "media-sidebar" },
          Y = { class: "media-wrapper" },
          $ = { class: "search-tweet" },
          J = { class: "search-icon" },
          G = O(() =>
            (0, i._)(
              "input",
              { type: "search", placeholder: "Search Chitter" },
              null,
              -1
            )
          ),
          K = { key: 0, class: "media-container" },
          Q = O(() =>
            (0, i._)("div", { class: "media-header" }, "New to Chitter?", -1)
          ),
          X = O(() =>
            (0, i._)(
              "div",
              { class: "gray-text" },
              " Sign up now to get your own personalized timeline! ",
              -1
            )
          ),
          ee = O(() =>
            (0, i._)(
              "div",
              { class: "gray-text" },
              [
                (0, i.Uk)(" By signing up, you agree to the "),
                (0, i._)("a", { class: "blue-link" }, "Terms of Service"),
                (0, i.Uk)(" and "),
                (0, i._)("a", { class: "blue-link" }, "Privacy Policy"),
                (0, i.Uk)(", including "),
                (0, i._)("a", { class: "blue-link" }, "Cookie Use"),
                (0, i.Uk)(". "),
              ],
              -1
            )
          ),
          te = (0, i.uE)(
            '<div class="media-container" data-v-45dbd83c><div class="media-header" data-v-45dbd83c>What&#39;s happening</div><div class="trend-container" data-v-45dbd83c><div class="trend-info" data-v-45dbd83c><span class="trend-type" data-v-45dbd83c>World news</span><span class="trend-headline" data-v-45dbd83c>Lorem ipsum generator leaves 2 killed, 8 injured</span><span class="trend-tweets" data-v-45dbd83c>56,182 Tweets</span></div><div class="trend-media" data-v-45dbd83c></div></div><div class="trend-container" data-v-45dbd83c><div class="trend-info" data-v-45dbd83c><span class="trend-type" data-v-45dbd83c>Trending in Video games</span><span class="trend-headline" data-v-45dbd83c>HE&#39;S UGLY</span><span class="trend-tweets" data-v-45dbd83c>32,478 Tweets</span></div></div><div class="trend-container" data-v-45dbd83c><div class="trend-info" data-v-45dbd83c><span class="trend-type" data-v-45dbd83c>Trending in Vatican City</span><span class="trend-headline" data-v-45dbd83c>#sanssweep</span><span class="trend-tweets" data-v-45dbd83c>4,200 Tweets</span></div></div></div><footer data-v-45dbd83c> Developed by <a href="https://github.com/renkode/" data-v-45dbd83c>renkode</a></footer>',
            2
          );
        var ae = {
          __name: "MediaSidebar",
          setup(e) {
            const t = (0, d.q)(),
              a = () => {
                t.setModalType("signup"), t.toggleModal();
              };
            return (e, n) => {
              const r = (0, i.up)("v-icon");
              return (
                (0, i.wg)(),
                (0, i.iD)("div", B, [
                  (0, i._)("div", Y, [
                    (0, i._)("div", $, [
                      (0, i._)("span", J, [
                        (0, i.Wm)(r, {
                          name: "hi-search",
                          fill: "#ffffffd5",
                          scale: "1.3",
                        }),
                      ]),
                      G,
                    ]),
                    (0, o.SU)(t).currentUser
                      ? (0, i.kq)("", !0)
                      : ((0, i.wg)(),
                        (0, i.iD)("div", K, [
                          Q,
                          (0, i._)("div", { class: "media-body" }, [
                            X,
                            (0, i._)(
                              "button",
                              { class: "sign-up-btn", onClick: a },
                              " Sign up with email "
                            ),
                            ee,
                          ]),
                        ])),
                    te,
                  ]),
                ])
              );
            };
          },
        };
        const ne = (0, V.Z)(ae, [["__scopeId", "data-v-45dbd83c"]]);
        var re = ne;
        const se = { class: "page-header" },
          le = { class: "header-wrapper" },
          ie = { key: 0, class: "profile-wrapper" },
          oe = { key: 0, class: "user-info-wrapper" },
          ue = { class: "display-name" },
          de = { class: "total-tweet-count gray-text" },
          ce = { key: 1, style: { "text-transform": "capitalize" } },
          pe = { key: 1, style: { "text-transform": "capitalize" } };
        var me = {
          __name: "HeaderSC",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, c.U)(),
              n = (0, i.Fl)(() => a.getUserByUsername(t.routeUsername)),
              r = (0, i.Fl)(() => {
                const e = [
                  "Tweet",
                  "Profile",
                  "Notifications",
                  "Followers",
                  "Following",
                ];
                return e.includes(t.routeName);
              });
            return (e, a) => {
              const s = (0, i.up)("v-icon");
              return (
                (0, i.wg)(),
                (0, i.iD)("div", se, [
                  (0, i._)("span", le, [
                    (0, o.SU)(r)
                      ? ((0, i.wg)(),
                        (0, i.iD)("span", ie, [
                          (0, i._)(
                            "span",
                            {
                              class: "back-arrow-btn",
                              onClick:
                                a[0] || (a[0] = (e) => (0, o.SU)(l.Z).back()),
                            },
                            [
                              (0, i.Wm)(s, {
                                name: "md-arrowback",
                                scale: "1.1",
                                fill: "#ffffff80",
                              }),
                            ]
                          ),
                          (0, o.SU)(n) &&
                          "tweet" !== (0, o.SU)(t).view &&
                          "notifications" !== (0, o.SU)(t).view
                            ? ((0, i.wg)(),
                              (0, i.iD)("div", oe, [
                                (0, i._)(
                                  "span",
                                  ue,
                                  (0, u.zw)((0, o.SU)(n).name),
                                  1
                                ),
                                (0, i._)(
                                  "span",
                                  de,
                                  (0, u.zw)((0, o.SU)(n).tweetCount) +
                                    " Tweets",
                                  1
                                ),
                              ]))
                            : ((0, i.wg)(),
                              (0, i.iD)(
                                "span",
                                ce,
                                (0, u.zw)((0, o.SU)(t).routeName),
                                1
                              )),
                        ]))
                      : ((0, i.wg)(),
                        (0, i.iD)(
                          "span",
                          pe,
                          (0, u.zw)((0, o.SU)(t).routeName),
                          1
                        )),
                  ]),
                ])
              );
            };
          },
        };
        const we = (0, V.Z)(me, [["__scopeId", "data-v-2eafe98c"]]);
        var ve = we;
        const fe = (e) => (
            (0, i.dD)("data-v-0857039a"), (e = e()), (0, i.Cn)(), e
          ),
          ge = { class: "banner-wrapper" },
          he = fe(() => (0, i._)("div", { class: "left-wrapper" }, null, -1)),
          ye = fe(() =>
            (0, i._)(
              "div",
              { class: "text-wrapper" },
              [
                (0, i._)(
                  "div",
                  { class: "header-text" },
                  "Don't miss what's happening"
                ),
                (0, i._)(
                  "div",
                  null,
                  "People on Chitter are the first to know."
                ),
              ],
              -1
            )
          );
        var Ue = {
          __name: "SignUpBanner",
          setup(e) {
            const t = (0, d.q)(),
              a = () => {
                t.setModalType("signup"), t.toggleModal();
              },
              n = () => {
                t.setModalType("login"), t.toggleModal();
              };
            return (e, t) => (
              (0, i.wg)(),
              (0, i.iD)("div", ge, [
                he,
                (0, i._)("div", { class: "right-wrapper" }, [
                  ye,
                  (0, i._)("div", { class: "button-wrapper" }, [
                    (0, i._)(
                      "button",
                      { class: "login-btn", onClick: n },
                      "Log in"
                    ),
                    (0, i._)(
                      "button",
                      { class: "signup-btn", onClick: a },
                      "Sign up"
                    ),
                  ]),
                ]),
              ])
            );
          },
        };
        const be = (0, V.Z)(Ue, [["__scopeId", "data-v-0857039a"]]);
        var _e = be;
        const Te = { class: "load-wrapper" },
          ke = (0, i._)("div", { class: "loader" }, null, -1),
          Se = [ke];
        var xe = {
          __name: "LoadSpinner",
          setup(e) {
            return (e, t) => ((0, i.wg)(), (0, i.iD)("div", Te, Se));
          },
        };
        const Ie = xe;
        var Ce = Ie,
          Fe = a(1319);
        const Me = { class: "modal-header" },
          Ee = { class: "header-item-wrapper" },
          Le = { class: "header-text" };
        var De = {
          __name: "ModalHeader",
          props: ["text"],
          setup(e) {
            const t = e,
              a = (0, d.q)();
            return (e, n) => {
              const r = (0, i.up)("v-icon");
              return (
                (0, i.wg)(),
                (0, i.iD)("div", Me, [
                  (0, i._)("span", Ee, [
                    (0, i._)(
                      "span",
                      {
                        class: "exit-modal-btn",
                        onClick:
                          n[0] ||
                          (n[0] = (...e) =>
                            (0, o.SU)(a).toggleModal &&
                            (0, o.SU)(a).toggleModal(...e)),
                      },
                      [
                        (0, i.Wm)(r, {
                          name: "bi-x",
                          scale: "1.6",
                          fill: "white",
                        }),
                      ]
                    ),
                    (0, i._)("span", Le, [
                      (0, i._)("strong", null, (0, u.zw)(t.text), 1),
                    ]),
                  ]),
                  (0, i.WI)(e.$slots, "default"),
                ])
              );
            };
          },
        };
        const We = (0, V.Z)(De, [["__scopeId", "data-v-d8fb2bce"]]);
        var Ne = We;
        const qe = { class: "validation-wrapper" },
          Ze = ["id", "value", "placeholder", "minLength", "maxlength", "rows"],
          je = ["id", "type", "value", "placeholder", "minLength", "maxlength"],
          He = { class: "label-wrapper" },
          ze = ["for"],
          Ae = { key: 0, class: "text-limit gray-text" };
        var Ve = {
          __name: "InputComponent",
          props: {
            inputValue: String,
            type: String,
            name: String,
            label: String,
            placeholder: String,
            validation: Array,
            isTextArea: Boolean,
            startsBlank: Boolean,
            minLength: [String, Number],
            maxLength: [String, Number],
            rows: String,
          },
          setup(e) {
            const t = e,
              a = (0, o.iH)(null),
              n = (0, o.iH)(null),
              r = (0, o.iH)(!!t.startsBlank),
              s = (e) => {
                e.currentTarget.nextElementSibling
                  .querySelector("label")
                  .classList.contains("red-text") ||
                  (e.currentTarget.nextElementSibling
                    .querySelector("label")
                    .classList.toggle("gray-text"),
                  e.currentTarget.nextElementSibling
                    .querySelector("label")
                    .classList.toggle("blue-text"),
                  e.currentTarget
                    .closest(".input-wrapper")
                    .classList.toggle("blue-border")),
                  t.maxLength &&
                    e.currentTarget.nextElementSibling
                      .querySelector(".text-limit")
                      .classList.toggle("show");
              };
            return (
              (0, i.YP)(
                () => t.inputValue,
                () => {
                  (t.validation && 0 === t.validation.length) ||
                    (r.value && (r.value = !1),
                    t.validation.some((e) => !0 === e.hasError)
                      ? ((a.value.className = "input-wrapper red-border"),
                        (a.value.querySelector("label").className = "red-text"))
                      : ((a.value.className = "input-wrapper blue-border"),
                        (a.value.querySelector("label").className =
                          "blue-text")));
                }
              ),
              (l, o) => (
                (0, i.wg)(),
                (0, i.iD)("div", qe, [
                  (0, i._)(
                    "div",
                    { class: "input-wrapper", ref_key: "wrapperRef", ref: a },
                    [
                      e.isTextArea
                        ? ((0, i.wg)(),
                          (0, i.iD)(
                            "textarea",
                            {
                              key: 0,
                              id: t.name,
                              type: "text",
                              value: e.inputValue,
                              placeholder: t.placeholder,
                              onInput:
                                o[0] ||
                                (o[0] = (e) =>
                                  l.$emit("update:inputValue", e.target.value)),
                              onFocusin: s,
                              onFocusout: s,
                              minLength: t.minLength,
                              maxlength: t.maxLength,
                              rows: t.rows,
                              ref: n.value,
                            },
                            null,
                            40,
                            Ze
                          ))
                        : ((0, i.wg)(),
                          (0, i.iD)(
                            "input",
                            {
                              key: 1,
                              id: t.name,
                              type: t.type ? t.type : "text",
                              value: e.inputValue,
                              placeholder: t.placeholder,
                              onInput:
                                o[1] ||
                                (o[1] = (e) =>
                                  l.$emit("update:inputValue", e.target.value)),
                              onFocusin: s,
                              onFocusout: s,
                              minLength: t.minLength,
                              maxlength: t.maxLength,
                              ref: n.value,
                            },
                            null,
                            40,
                            je
                          )),
                      (0, i._)("span", He, [
                        (0, i._)(
                          "label",
                          { class: "gray-text", for: t.name },
                          (0, u.zw)(t.label),
                          9,
                          ze
                        ),
                        t.maxLength
                          ? ((0, i.wg)(),
                            (0, i.iD)(
                              "span",
                              Ae,
                              (0, u.zw)(e.inputValue.length) +
                                " / " +
                                (0, u.zw)(t.maxLength),
                              1
                            ))
                          : (0, i.kq)("", !0),
                      ]),
                    ],
                    512
                  ),
                  ((0, i.wg)(!0),
                  (0, i.iD)(
                    i.HY,
                    null,
                    (0, i.Ko)(
                      e.validation,
                      (e, t) => (
                        (0, i.wg)(),
                        (0, i.iD)(
                          i.HY,
                          null,
                          [
                            e.hasError && !r.value
                              ? ((0, i.wg)(),
                                (0, i.iD)(
                                  "span",
                                  { class: "error-input red-text", key: t },
                                  (0, u.zw)(e.errorText),
                                  1
                                ))
                              : (0, i.kq)("", !0),
                          ],
                          64
                        )
                      )
                    ),
                    256
                  )),
                ])
              )
            );
          },
        };
        const Re = (0, V.Z)(Ve, [["__scopeId", "data-v-b82ee42a"]]);
        var Pe = Re,
          Oe = a(9707);
        const Be = (e) => (
            (0, i.dD)("data-v-4e6e8892"), (e = e()), (0, i.Cn)(), e
          ),
          Ye = { class: "modal-wrapper" },
          $e = ["disabled", "onClick"],
          Je = { class: "header-wrapper" },
          Ge = { class: "image-actions" },
          Ke = { class: "set-image-btn" },
          Qe = { for: "upload-header" },
          Xe = { class: "modal-content" },
          et = { class: "avatar-wrapper" },
          tt = { class: "image-actions" },
          at = { class: "set-image-btn" },
          nt = { for: "upload-avatar" },
          rt = { id: "edit-profile-form", class: "modal-form" },
          st = { class: "name-and-username" },
          lt = { class: "birthday-wrapper" },
          it = Be(() =>
            (0, i._)(
              "span",
              { class: "birthday-label gray-text" },
              "Birth date",
              -1
            )
          ),
          ot = { class: "birthday-input-wrapper" };
        var ut = {
          __name: "ProfileModal",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, c.U)(),
              r = (0, o.iH)(t.currentUser.headerUrl),
              s = (0, o.iH)(t.currentUser.avatarUrl),
              l = (0, o.iH)(t.currentUser.name),
              u = (0, o.iH)(t.currentUser.username),
              m = (0, o.iH)(t.currentUser.description),
              w = (0, o.iH)(t.currentUser.location),
              v = (0, o.iH)(t.currentUser.website),
              f = (0, o.iH)(null),
              g = (0, o.iH)(null),
              h = (0, i.Fl)(() => 0 === l.value.length),
              y = 3,
              U = (0, i.Fl)(() => u.value.length >= y),
              b = (0, i.Fl)(() => Oe.Fh.test(u.value)),
              _ = (0, i.Fl)(
                () =>
                  a.users.filter(
                    (e) => t.currentId !== e.id && e.username == u.value
                  ).length > 0
              ),
              T = (0, i.Fl)(() => !U.value || !b.value || _.value),
              k = new RegExp(
                /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i
              ),
              S = (0, i.Fl)(() => k.test(v.value)),
              x = (0, i.Fl)(() => !S.value && v.value.length > 0),
              I = (0, i.Fl)(() => h.value || T.value || x.value),
              C = (e) => {
                s.value = URL.createObjectURL(e.currentTarget.files[0]);
              },
              F = (e) => {
                r.value = URL.createObjectURL(e.currentTarget.files[0]);
              },
              M = () => {
                r.value = "";
              },
              E = () => {
                Oe.YN.forEach((e) => {
                  var a = document.createElement("option");
                  t.currentUser.birthday.split(" ")[0] === e.month &&
                    (a.selected = !0),
                    (a.value = e.month),
                    (a.textContent = e.month),
                    f.value.appendChild(a);
                });
              },
              L = () => {
                if (((g.value.innerHTML = ""), "" === f.value.value)) return;
                const e = Oe.YN.filter((e) => e.month === f.value.value)[0]
                    .days,
                  [a, n] = t.currentUser.birthday.split(" ");
                for (let t = 1; t <= e; t++) {
                  var r = document.createElement("option");
                  a === f.value.value && n == t && (r.selected = !0),
                    (r.value = t),
                    (r.textContent = t),
                    g.value.appendChild(r);
                }
              },
              D = () => {
                const e = `${f.value.value} ${g.value.value}`;
                a.updateProfile(
                  t.currentId,
                  l.value,
                  u.value,
                  m.value,
                  w.value,
                  v.value,
                  e,
                  s.value,
                  r.value
                ),
                  t.toggleModal(),
                  t.viewUserProfile(t.currentUser.username);
              };
            return (
              (0, i.bv)(() => {
                E(), L();
              }),
              (e, t) => {
                const a = (0, i.up)("v-icon");
                return (
                  (0, i.wg)(),
                  (0, i.iD)("div", Ye, [
                    (0, i.Wm)(
                      Ne,
                      { text: "Edit Profile" },
                      {
                        default: (0, i.w5)(() => [
                          (0, i._)(
                            "button",
                            {
                              class: "save-btn",
                              type: "submit",
                              form: "edit-profile-form",
                              disabled: (0, o.SU)(I),
                              onClick: (0, n.iM)(D, ["prevent"]),
                            },
                            " Save ",
                            8,
                            $e
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    (0, i._)("div", Je, [
                      (0, i.Wm)(Fe.Z, { url: r.value }, null, 8, ["url"]),
                      (0, i._)("span", Ge, [
                        (0, i._)("span", Ke, [
                          (0, i._)(
                            "input",
                            {
                              id: "upload-header",
                              type: "file",
                              accept: "image/png, image/gif, image/jpeg",
                              onChange: F,
                              hidden: "",
                            },
                            null,
                            32
                          ),
                          (0, i._)("label", Qe, [
                            (0, i.Wm)(a, {
                              name: "md-addaphoto-outlined",
                              scale: "1.0",
                              fill: "white",
                            }),
                          ]),
                        ]),
                        (0, i._)(
                          "span",
                          { class: "clear-header-btn", onClick: M },
                          [
                            (0, i.Wm)(a, {
                              name: "bi-x",
                              scale: "1.6",
                              fill: "white",
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    (0, i._)("div", Xe, [
                      (0, i._)("div", et, [
                        (0, i.Wm)(
                          p.Z,
                          { url: s.value, size: 112 },
                          {
                            default: (0, i.w5)(() => [
                              (0, i._)("span", tt, [
                                (0, i._)("span", at, [
                                  (0, i._)(
                                    "input",
                                    {
                                      id: "upload-avatar",
                                      type: "file",
                                      accept:
                                        "image/png, image/gif, image/jpeg",
                                      onChange: C,
                                      hidden: "",
                                    },
                                    null,
                                    32
                                  ),
                                  (0, i._)("label", nt, [
                                    (0, i.Wm)(a, {
                                      name: "md-addaphoto-outlined",
                                      scale: "1.0",
                                      fill: "white",
                                    }),
                                  ]),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["url"]
                        ),
                      ]),
                      (0, i._)("form", rt, [
                        (0, i._)("div", st, [
                          (0, i.Wm)(
                            Pe,
                            {
                              inputValue: l.value,
                              "onUpdate:inputValue":
                                t[0] || (t[0] = (e) => (l.value = e)),
                              name: "nameInput",
                              label: "Name",
                              validation: [
                                {
                                  errorText: "Name can't be blank",
                                  hasError: (0, o.SU)(h),
                                },
                              ],
                              minLength: "1",
                              maxLength: "50",
                            },
                            null,
                            8,
                            ["inputValue", "validation"]
                          ),
                          (0, i.Wm)(
                            Pe,
                            {
                              inputValue: u.value,
                              "onUpdate:inputValue":
                                t[1] || (t[1] = (e) => (u.value = e)),
                              name: "usernameInput",
                              label: "Username",
                              validation: [
                                {
                                  errorText: `Username must be at least\n              ${y} characters.`,
                                  hasError: !(0, o.SU)(U),
                                },
                                {
                                  errorText:
                                    "Username can't contain special characters.",
                                  hasError: !(0, o.SU)(b),
                                },
                                {
                                  errorText: "Username is taken.",
                                  hasError: (0, o.SU)(_),
                                },
                              ],
                              minLength: y,
                              maxLength: "15",
                              onKeydown:
                                t[2] ||
                                (t[2] = (0, n.D2)(
                                  (0, n.iM)(() => {}, ["prevent"]),
                                  ["space"]
                                )),
                            },
                            null,
                            8,
                            ["inputValue", "validation"]
                          ),
                        ]),
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: m.value,
                            "onUpdate:inputValue":
                              t[3] || (t[3] = (e) => (m.value = e)),
                            isTextArea: !0,
                            name: "bioInput",
                            label: "Bio",
                            validation: [],
                            maxLength: "160",
                            rows: "3",
                            onKeydown:
                              t[4] ||
                              (t[4] = (0, n.D2)(
                                (0, n.iM)(() => {}, ["prevent"]),
                                ["enter"]
                              )),
                          },
                          null,
                          8,
                          ["inputValue"]
                        ),
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: w.value,
                            "onUpdate:inputValue":
                              t[5] || (t[5] = (e) => (w.value = e)),
                            name: "locationInput",
                            label: "Location",
                            validation: [],
                            maxLength: "30",
                          },
                          null,
                          8,
                          ["inputValue"]
                        ),
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: v.value,
                            "onUpdate:inputValue":
                              t[6] || (t[6] = (e) => (v.value = e)),
                            name: "websiteInput",
                            label: "Website",
                            validation: [
                              {
                                errorText: "URL is not valid.",
                                hasError: (0, o.SU)(x),
                              },
                            ],
                            maxLength: "50",
                          },
                          null,
                          8,
                          ["inputValue", "validation"]
                        ),
                        (0, i._)("div", lt, [
                          it,
                          (0, i._)("span", ot, [
                            (0, i._)(
                              "select",
                              {
                                id: "month",
                                name: "month",
                                ref_key: "monthInput",
                                ref: f,
                                onChange: L,
                              },
                              null,
                              544
                            ),
                            (0, i._)(
                              "select",
                              {
                                id: "day",
                                name: "day",
                                ref_key: "dayInput",
                                ref: g,
                              },
                              null,
                              512
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ])
                );
              }
            );
          },
        };
        const dt = (0, V.Z)(ut, [["__scopeId", "data-v-4e6e8892"]]);
        var ct = dt,
          pt = a(8168),
          mt = a(7925),
          wt = {
            __name: "UserListModal",
            setup(e) {
              const t = (0, d.q)(),
                a = (0, mt.g)(),
                n = (0, c.U)(),
                r = (0, i.Fl)(() =>
                  "retweet-list" === t.modalType
                    ? "Retweeted by"
                    : "like-list" === t.modalType
                    ? "Liked by"
                    : ""
                ),
                s = (0, i.Fl)(() => a.getTweet(t.routeTweetId)),
                l = (0, i.Fl)(() =>
                  s.value && "retweet-list" === t.modalType
                    ? s.value.retweetsFrom.map((e) => n.getUser(e))
                    : "like-list" === t.modalType
                    ? s.value.likesFrom.map((e) => n.getUser(e))
                    : null
                );
              return (e, t) => (
                (0, i.wg)(),
                (0, i.iD)(
                  i.HY,
                  null,
                  [
                    (0, i.Wm)(Ne, { text: (0, o.SU)(r) }, null, 8, ["text"]),
                    (0, o.SU)(l)
                      ? ((0, i.wg)(),
                        (0, i.j4)(
                          pt.Z,
                          { key: 0, users: (0, o.SU)(l) },
                          null,
                          8,
                          ["users"]
                        ))
                      : (0, i.kq)("", !0),
                  ],
                  64
                )
              );
            },
          };
        const vt = wt;
        var ft = vt,
          gt = a(6752),
          ht = a(5743),
          yt = a.n(ht),
          Ut = a(1172);
        const bt = (e) => (
            (0, i.dD)("data-v-4f11c759"), (e = e()), (0, i.Cn)(), e
          ),
          _t = { class: "tweet-container" },
          Tt = { class: "tweet-body" },
          kt = { class: "profile-pic-container" },
          St = bt(() => (0, i._)("div", { class: "gray-line" }, null, -1)),
          xt = { class: "tweet-data" },
          It = { class: "user-info-and-btn" },
          Ct = { class: "user-info-wrapper" },
          Ft = { class: "display-name" },
          Mt = { class: "username gray-text" },
          Et = bt(() =>
            (0, i._)("span", { class: "separator gray-text" }, "·", -1)
          ),
          Lt = { class: "tweet-time gray-text" },
          Dt = { class: "tweet-content" };
        var Wt = {
          __name: "TweetCardSimple",
          props: { user: Object, tweet: Object },
          setup(e) {
            const t = e;
            var n = a(893);
            yt().extend(n);
            let r = null;
            const s = (0, o.iH)(yt()().toISOString()),
              l = (0, o.iH)(Ut.Z.formatTweetDate(t.tweet.timestamp, s.value));
            return (
              (0, i.bv)(() => {
                yt()(s.value).diff(yt()(t.tweet.timestamp), "hour") > 23 ||
                  (r = setInterval(() => {
                    l.value !==
                      Ut.Z.formatTweetDate(t.tweet.timestamp, s.value) &&
                      (l.value = Ut.Z.formatTweetDate(
                        t.tweet.timestamp,
                        s.value
                      ));
                  }, 3e4));
              }),
              (0, i.Jd)(() => {
                clearInterval(r);
              }),
              (e, a) => (
                (0, i.wg)(),
                (0, i.iD)("div", _t, [
                  (0, i._)("div", Tt, [
                    (0, i._)("div", kt, [
                      (0, i.Wm)(
                        p.Z,
                        { url: t.user.avatarUrl, size: 48 },
                        null,
                        8,
                        ["url"]
                      ),
                      St,
                    ]),
                    (0, i._)("div", xt, [
                      (0, i._)("div", It, [
                        (0, i._)("div", Ct, [
                          (0, i._)("span", Ft, (0, u.zw)(t.user.name), 1),
                          (0, i._)(
                            "span",
                            Mt,
                            "@" + (0, u.zw)(t.user.username),
                            1
                          ),
                          Et,
                          (0, i._)("span", Lt, (0, u.zw)(l.value), 1),
                        ]),
                      ]),
                      (0, i._)("div", Dt, [
                        (0, i._)(
                          "div",
                          { class: "tweet-text", ref: "tweetText" },
                          (0, u.zw)(t.tweet.text),
                          513
                        ),
                      ]),
                    ]),
                  ]),
                ])
              )
            );
          },
        };
        const Nt = (0, V.Z)(Wt, [["__scopeId", "data-v-4f11c759"]]);
        var qt = Nt,
          Zt = {
            __name: "ComposeTweetModal",
            setup(e) {
              const t = (0, d.q)(),
                a = (0, mt.g)(),
                n = (0, c.U)(),
                r = (0, i.Fl)(() => a.getTweet(t.modalReply.tweetId)),
                s = (0, i.Fl)(() => n.getUser(t.modalReply.userId));
              return (e, a) => (
                (0, i.wg)(),
                (0, i.iD)(
                  i.HY,
                  null,
                  [
                    (0, i.Wm)(Ne),
                    "reply" === (0, o.SU)(t).modalType
                      ? ((0, i.wg)(),
                        (0, i.j4)(
                          qt,
                          {
                            key: 0,
                            user: {
                              name: (0, o.SU)(s).name,
                              username: (0, o.SU)(s).username,
                              avatarUrl: (0, o.SU)(s).avatarUrl,
                            },
                            tweet: (0, o.SU)(r),
                          },
                          null,
                          8,
                          ["user", "tweet"]
                        ))
                      : (0, i.kq)("", !0),
                    (0, i.Wm)(gt.Z, { isModal: !0 }),
                  ],
                  64
                )
              );
            },
          };
        const jt = Zt;
        var Ht = jt;
        const zt = { class: "form-wrapper" },
          At = { id: "sign-up-form" },
          Vt = { class: "input-wrapper" },
          Rt = { class: "input-wrapper" },
          Pt = ["disabled", "onClick"];
        var Ot = {
          __name: "SignUpModal",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, c.U)(),
              r = (0, o.iH)(!1),
              s = (0, o.iH)(""),
              l = (0, i.Fl)(() => 0 === s.value.length),
              u = (0, o.iH)(""),
              p = 3,
              m = (0, i.Fl)(() => u.value.length >= p),
              w = (0, i.Fl)(() => !Oe.Fh.test(u.value)),
              v = (0, i.Fl)(
                () => a.users.filter((e) => e.username == u.value).length > 0
              ),
              f = (0, i.Fl)(() => !m.value || w.value || v.value),
              g = (0, o.iH)(""),
              h = (0, i.Fl)(() => 0 === g.value.length),
              y = (0, i.Fl)(() => g.value.length > 0 && !Oe.HN.test(g.value)),
              U = (0, i.Fl)(() => h.value && y.value),
              b = (0, o.iH)(""),
              _ = (0, i.Fl)(() => 0 === b.value.length),
              T = (0, i.Fl)(() => b.value.length > 0 && b.value.length < 6),
              k = (0, i.Fl)(() => _.value || T.value),
              S = (0, o.iH)(""),
              x = (0, i.Fl)(
                () =>
                  l.value ||
                  f.value ||
                  U.value ||
                  k.value ||
                  0 === S.value.length ||
                  r.value
              ),
              I = async () => {
                let e;
                try {
                  if (
                    ((r.value = !0),
                    await fetch("https://jsonplaceholder.typicode.com/users/1")
                      .then((e) => e.json())
                      .then((t) => {
                        (r.value = !1), (e = t);
                      }),
                    e.username !== S.value)
                  )
                    return void t.toast("Wrong code.");
                } catch {
                  return void t.toast("Something went wrong.");
                }
                t.toggleModal(),
                  t.signUp(!1, s.value, u.value),
                  t.toast("Success!");
              };
            return (e, t) => (
              (0, i.wg)(),
              (0, i.iD)(
                i.HY,
                null,
                [
                  (0, i.Wm)(Ne, { text: "Create your account" }),
                  (0, i._)("div", zt, [
                    (0, i._)("form", At, [
                      (0, i._)("div", Vt, [
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: s.value,
                            "onUpdate:inputValue":
                              t[0] || (t[0] = (e) => (s.value = e)),
                            name: "nameInput",
                            label: "Name",
                            startsBlank: !0,
                            validation: [
                              {
                                errorText: "What's your name?",
                                hasError: (0, o.SU)(l),
                              },
                            ],
                            minLength: "1",
                            maxLength: "50",
                          },
                          null,
                          8,
                          ["inputValue", "validation"]
                        ),
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: u.value,
                            "onUpdate:inputValue":
                              t[1] || (t[1] = (e) => (u.value = e)),
                            name: "usernameInput",
                            label: "Username",
                            startsBlank: !0,
                            validation: [
                              {
                                errorText: `Username must be at least\n              ${p} characters.`,
                                hasError: !(0, o.SU)(m),
                              },
                              {
                                errorText:
                                  "Username can't contain special characters.",
                                hasError: (0, o.SU)(w),
                              },
                              {
                                errorText: "Username is taken.",
                                hasError: (0, o.SU)(v),
                              },
                            ],
                            minLength: p,
                            maxLength: "15",
                            onKeydown:
                              t[2] ||
                              (t[2] = (0, n.D2)(
                                (0, n.iM)(() => {}, ["prevent"]),
                                ["space"]
                              )),
                          },
                          null,
                          8,
                          ["inputValue", "validation"]
                        ),
                      ]),
                      (0, i.Wm)(
                        Pe,
                        {
                          inputValue: g.value,
                          "onUpdate:inputValue":
                            t[3] || (t[3] = (e) => (g.value = e)),
                          type: "email",
                          name: "emailInput",
                          label: "Email",
                          startsBlank: !0,
                          validation: [
                            {
                              errorText: "Email is required.",
                              hasError: (0, o.SU)(h),
                            },
                            {
                              errorText: "Please enter a valid email.",
                              hasError: (0, o.SU)(y),
                            },
                          ],
                          minLength: "1",
                        },
                        null,
                        8,
                        ["inputValue", "validation"]
                      ),
                      (0, i._)("div", Rt, [
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: b.value,
                            "onUpdate:inputValue":
                              t[4] || (t[4] = (e) => (b.value = e)),
                            type: "password",
                            name: "passInput",
                            label: "Password",
                            startsBlank: !0,
                            validation: [
                              {
                                errorText: "Password is required.",
                                hasError: (0, o.SU)(_),
                              },
                              {
                                errorText:
                                  "Password must be at least 6 characters.",
                                hasError: (0, o.SU)(T),
                              },
                            ],
                            minLength: "6",
                          },
                          null,
                          8,
                          ["inputValue", "validation"]
                        ),
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: S.value,
                            "onUpdate:inputValue":
                              t[5] || (t[5] = (e) => (S.value = e)),
                            name: "signUpCodeInput",
                            label: "Sign-up code",
                            startsBlank: !0,
                            validation: [],
                            minLength: "1",
                          },
                          null,
                          8,
                          ["inputValue"]
                        ),
                      ]),
                      (0, i._)(
                        "button",
                        {
                          class: "make-account-btn",
                          type: "submit",
                          disabled: (0, o.SU)(x),
                          onClick: (0, n.iM)(I, ["prevent"]),
                        },
                        " Sign Up ",
                        8,
                        Pt
                      ),
                    ]),
                  ]),
                ],
                64
              )
            );
          },
        };
        const Bt = (0, V.Z)(Ot, [["__scopeId", "data-v-b96c3120"]]);
        var Yt = Bt;
        const $t = (e) => (
            (0, i.dD)("data-v-21fac3d3"), (e = e()), (0, i.Cn)(), e
          ),
          Jt = { class: "logo" },
          Gt = { class: "form-wrapper" },
          Kt = { id: "sign-in-form" },
          Qt = $t(() =>
            (0, i._)("div", { class: "sign-in-text" }, "Sign in to Chitter", -1)
          ),
          Xt = ["disabled", "onClick"],
          ea = $t(() =>
            (0, i._)(
              "span",
              { class: "gray-text" },
              "Don't have an account? ",
              -1
            )
          );
        var ta = {
          __name: "LogInModal",
          setup(e) {
            const t = (0, d.q)(),
              a = ((0, c.U)(), (0, o.iH)(!1), (0, o.iH)("")),
              r = (0, o.iH)(""),
              s = (0, i.Fl)(() => 0 === a.value.length || 0 === r.value.length),
              l = () => {
                t.setModalType("signup");
              },
              u = async () => {
                t.toggleModal(), t.logIn("1");
              };
            return (e, t) => {
              const d = (0, i.up)("v-icon");
              return (
                (0, i.wg)(),
                (0, i.iD)(
                  i.HY,
                  null,
                  [
                    (0, i.Wm)(Ne, null, {
                      default: (0, i.w5)(() => [
                        (0, i._)("span", Jt, [
                          (0, i.Wm)(d, {
                            name: "bi-twitter",
                            scale: "1.5",
                            fill: "#1d9bf0",
                          }),
                        ]),
                      ]),
                      _: 1,
                    }),
                    (0, i._)("div", Gt, [
                      (0, i._)("form", Kt, [
                        Qt,
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: a.value,
                            "onUpdate:inputValue":
                              t[0] || (t[0] = (e) => (a.value = e)),
                            name: "userInput",
                            label: "Email",
                            startsBlank: !0,
                            validation: [],
                            minLength: "1",
                          },
                          null,
                          8,
                          ["inputValue"]
                        ),
                        (0, i.Wm)(
                          Pe,
                          {
                            inputValue: r.value,
                            "onUpdate:inputValue":
                              t[1] || (t[1] = (e) => (r.value = e)),
                            type: "password",
                            name: "passInput",
                            label: "Password",
                            startsBlank: !0,
                            validation: [],
                            minLength: "1",
                          },
                          null,
                          8,
                          ["inputValue"]
                        ),
                        (0, i._)(
                          "button",
                          {
                            class: "sign-in-btn",
                            type: "submit",
                            disabled: (0, o.SU)(s),
                            onClick: (0, n.iM)(u, ["prevent"]),
                          },
                          " Sign In ",
                          8,
                          Xt
                        ),
                        (0, i._)("div", null, [
                          ea,
                          (0, i._)(
                            "a",
                            { class: "blue-link", onClick: l },
                            "Sign up"
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  64
                )
              );
            };
          },
        };
        const aa = (0, V.Z)(ta, [["__scopeId", "data-v-21fac3d3"]]);
        var na = aa;
        const ra = { class: "modal-container" };
        var sa = {
          __name: "ModalComponent",
          setup(e) {
            const t = (0, d.q)();
            return (e, a) => (
              (0, i.wg)(),
              (0, i.iD)(
                "div",
                {
                  class: "modal-overlay",
                  onClick:
                    a[0] ||
                    (a[0] = (0, n.iM)(
                      (e) => (0, o.SU)(t).toggleModal(),
                      ["stop", "self"]
                    )),
                },
                [
                  (0, i._)("div", ra, [
                    "edit-profile" === (0, o.SU)(t).modalType
                      ? ((0, i.wg)(), (0, i.j4)(ct, { key: 0 }))
                      : (0, i.kq)("", !0),
                    "retweet-list" === (0, o.SU)(t).modalType ||
                    "like-list" === (0, o.SU)(t).modalType
                      ? ((0, i.wg)(), (0, i.j4)(ft, { key: 1 }))
                      : (0, i.kq)("", !0),
                    "status" === (0, o.SU)(t).modalType ||
                    "reply" === (0, o.SU)(t).modalType
                      ? ((0, i.wg)(), (0, i.j4)(Ht, { key: 2 }))
                      : (0, i.kq)("", !0),
                    "signup" === (0, o.SU)(t).modalType
                      ? ((0, i.wg)(), (0, i.j4)(Yt, { key: 3 }))
                      : (0, i.kq)("", !0),
                    "login" === (0, o.SU)(t).modalType
                      ? ((0, i.wg)(), (0, i.j4)(na, { key: 4 }))
                      : (0, i.kq)("", !0),
                  ]),
                ]
              )
            );
          },
        };
        const la = sa;
        var ia = la;
        const oa = { class: "toast" };
        var ua = {
          __name: "ToastMessage",
          props: ["duration"],
          setup(e) {
            const t = e,
              a = (0, d.q)(),
              n = setTimeout(() => (a.showToast = !1), t.duration);
            return (
              (0, i.Jd)(() => {
                clearTimeout(n);
              }),
              (e, t) => (
                (0, i.wg)(),
                (0, i.iD)("div", oa, (0, u.zw)((0, o.SU)(a).toastText), 1)
              )
            );
          },
        };
        const da = (0, V.Z)(ua, [["__scopeId", "data-v-7984448e"]]);
        var ca = da;
        const pa = { class: "main-wrapper" },
          ma = { class: "timeline-wrapper" };
        var wa = {
          __name: "App",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, c.U)(),
              r = (0, o.iH)(window.innerWidth),
              s = () => {
                r.value = window.innerWidth;
              };
            return (
              (0, i.bv)(() => {
                t.setCurrentUser(a.getUser("1")),
                  window.addEventListener("resize", s);
              }),
              (0, i.Jd)(() => {
                window.removeEventListener("resize");
              }),
              (e, a) => {
                const s = (0, i.up)("router-view");
                return (
                  (0, i.wg)(),
                  (0, i.iD)(
                    i.HY,
                    null,
                    [
                      r.value > 500 || (0, o.SU)(t).currentUser
                        ? ((0, i.wg)(), (0, i.j4)(P, { key: 0 }))
                        : (0, i.kq)("", !0),
                      (0, i._)("div", pa, [
                        (0, i._)("div", ma, [
                          (0, i.Wm)(ve),
                          (0, i.Wm)(s, null, {
                            default: (0, i.w5)(({ Component: e }) => [
                              (0, i.Wm)(
                                n.uT,
                                { name: "fade", mode: "out-in" },
                                {
                                  default: (0, i.w5)(() => [
                                    ((0, i.wg)(),
                                    (0, i.j4)(
                                      i.n4,
                                      null,
                                      {
                                        default: (0, i.w5)(() => [
                                          ((0, i.wg)(),
                                          (0, i.j4)((0, i.LL)(e))),
                                        ]),
                                        fallback: (0, i.w5)(() => [
                                          (0, i.Wm)(Ce),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    )),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                      ]),
                      r.value >= 1005
                        ? ((0, i.wg)(), (0, i.j4)(re, { key: 1 }))
                        : (0, i.kq)("", !0),
                      (0, o.SU)(t).currentUser
                        ? (0, i.kq)("", !0)
                        : ((0, i.wg)(), (0, i.j4)(_e, { key: 2 })),
                      ((0, i.wg)(),
                      (0, i.j4)(i.lR, { to: "body" }, [
                        (0, i.Wm)(n.uT, null, {
                          default: (0, i.w5)(() => [
                            (0, o.SU)(t).showModal
                              ? ((0, i.wg)(), (0, i.j4)(ia, { key: 0 }))
                              : (0, i.kq)("", !0),
                          ]),
                          _: 1,
                        }),
                        (0, i.Wm)(n.uT, null, {
                          default: (0, i.w5)(() => [
                            (0, o.SU)(t).showToast
                              ? ((0, i.wg)(),
                                (0, i.j4)(ca, { key: 0, duration: 1500 }))
                              : (0, i.kq)("", !0),
                          ]),
                          _: 1,
                        }),
                      ])),
                    ],
                    64
                  )
                );
              }
            );
          },
        };
        const va = wa;
        var fa = va,
          ga = a(4463),
          ha = a(1479),
          ya = a(9422),
          Ua = a(6564),
          ba = a(9235),
          _a = a(8422),
          Ta = a(3e3),
          ka = a(2596),
          Sa = a(1799),
          xa = a(7053),
          Ia = a(3982);
        (0, ga.Go)(
          ha.G4C,
          ya.MGj,
          ya.dpH,
          ha.Ohp,
          Ua.Lok,
          Ua.R5Z,
          ba.J4e,
          _a.m4n,
          Ta.eoI,
          _a.WbZ,
          Ua.v0M,
          ya.HrR,
          ha.JEI,
          Ua.npH,
          Ua.SW4,
          ka.ZcQ,
          ka.X81,
          Sa.p1b,
          xa.EaH,
          Ua.czh,
          Sa.est,
          Ia.BR5,
          Ta.S5t,
          Ua.opd,
          Sa.P4y
        );
        const Ca = (0, r.WB)(),
          Fa = (0, n.ri)(fa);
        Fa.component("v-icon", ga.xt),
          Fa.use(Ca, s.S),
          Fa.use(l.Z).mount("#app");
      },
      1172: function (e, t, a) {
        var n = a(5743),
          r = a.n(n),
          s = a(893),
          l = a(976),
          i = a(1148),
          o = {
            thresholds: [
              { l: "s", r: 1 },
              { l: "ss", r: 59, d: "second" },
              { l: "m", r: 1 },
              { l: "mm", r: 59, d: "minute" },
              { l: "h", r: 1 },
              { l: "hh", r: 23, d: "hour" },
              { l: "d", r: 1 },
              { l: "dd", r: 29, d: "day" },
              { l: "M", r: 1 },
              { l: "MM", r: 11, d: "month" },
              { l: "y" },
              { l: "yy", d: "year" },
            ],
          };
        r().extend(s, o),
          r().extend(l),
          r().extend(i),
          r().updateLocale("en", {
            relativeTime: {
              past: "%s",
              s: "1s",
              ss: "%ds",
              m: "1m",
              mm: "%dm",
              h: "1h",
              hh: "%dh",
              d: "%dh",
            },
          }),
          (t["Z"] = {
            formatTweetDate(e, t) {
              if (!e) return "Unknown";
              const a = r()(e),
                n = r()(t);
              return a.year() === n.year()
                ? a.isToday() || n.diff(a, "hour") < 23
                  ? a.fromNow()
                  : a.format("MMM D")
                : a.format("MMM D, YYYY");
            },
            formatJoinDate(e) {
              if (!e) return null;
              const t = r()(e);
              return t.format("MMMM YYYY");
            },
            formatTime(e) {
              if (!e) return "Unknown";
              const t = r()(e);
              return t.format("h:mm A");
            },
            formatFullDate(e) {
              if (!e) return "Unknown";
              const t = r()(e);
              return t.format("MMM D, YYYY");
            },
          });
      },
      9707: function (e, t, a) {
        a.d(t, {
          Fh: function () {
            return l;
          },
          HN: function () {
            return i;
          },
          PH: function () {
            return s;
          },
          YM: function () {
            return o;
          },
          YN: function () {
            return u;
          },
          nC: function () {
            return r;
          },
          yV: function () {
            return n;
          },
        });
        const n = new RegExp(
            /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/i
          ),
          r = new RegExp(/(#+[a-zA-Z0-9(_)]{1,})/),
          s = new RegExp(/^(@[a-zA-Z0-9_]{1,}[\s\S])*$/),
          l = new RegExp(/^[a-zA-Z0-9_]*$/),
          i = new RegExp(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
          ),
          o = (e) => {
            if (e && 0 !== e.length)
              switch (e.length) {
                case 1:
                  return "one-img";
                case 2:
                  return "two-img";
                case 3:
                  return "three-img";
                case 4:
                  return "four-img";
                default:
                  return "";
              }
          },
          u = [
            { month: "", days: "" },
            { month: "January", days: 31 },
            { month: "February", days: 29 },
            { month: "March", days: 31 },
            { month: "April", days: 30 },
            { month: "May", days: 31 },
            { month: "June", days: 30 },
            { month: "July", days: 31 },
            { month: "August", days: 31 },
            { month: "September", days: 30 },
            { month: "October", days: 31 },
            { month: "November", days: 30 },
            { month: "December", days: 31 },
          ];
      },
      1120: function (e, t, a) {
        var n = a(2483),
          r = a(9327);
        const s = () =>
            Promise.all([a.e(927), a.e(456), a.e(462)]).then(a.bind(a, 9859)),
          l = () =>
            Promise.all([a.e(927), a.e(456), a.e(3)]).then(a.bind(a, 178)),
          i = () => a.e(539).then(a.bind(a, 4539)),
          o = () => Promise.all([a.e(927), a.e(156)]).then(a.bind(a, 9843)),
          u = () => a.e(473).then(a.bind(a, 8473)),
          d = () => a.e(768).then(a.bind(a, 5768)),
          c = {
            template:
              '<div class="error gray-text" v-else>Tweet does not exist.</div>',
          },
          p = [
            { path: "", redirect: "/home" },
            { path: "/", redirect: "/home" },
            { path: "/chitter", redirect: "/home" },
            { path: "/home", name: "Home", component: s },
            { path: "/explore", name: "Explore", component: l },
            { path: "/notifications", name: "Notifications", component: i },
            { path: "/:username", name: "Profile", component: o, props: !0 },
            {
              path: "/:username/following",
              name: "Following",
              component: u,
              props: !0,
            },
            {
              path: "/:username/followers",
              name: "Followers",
              component: u,
              props: !0,
            },
            { path: "/status/:id", name: "Tweet", component: d, props: !0 },
            { path: "/:catchAll(.*)", component: c },
          ],
          m = (0, n.p7)({ history: (0, n.PO)(), routes: p });
        m.beforeEach((e, t) => {
          const a = (0, r.q)();
          a.showModal && a.toggleModal();
        }),
          (t["Z"] = m);
      },
      9327: function (e, t, a) {
        a.d(t, {
          q: function () {
            return l;
          },
        });
        a(7658);
        var n = a(2578),
          r = a(988),
          s = a(1120);
        const l = (0, n.Q_)("app", {
          state: () => ({
            currentId: null,
            currentUser: null,
            path: "",
            view: "home",
            previousViews: ["home"],
            viewTweetId: null,
            viewProfileId: null,
            profileTab: "tweets",
            showModal: !1,
            modalType: "status",
            modalReply: { userId: null, tweetId: null },
            showToast: !1,
            toastText: "",
            NUM_INITIAL_TWEETS: 5,
            NUM_LOAD_OLDER_TWEETS: 3,
          }),
          getters: {
            routeName: () => s.Z.currentRoute.value.name,
            routeTweetId: () => s.Z.currentRoute.value.params.id,
            routeUsername: () => s.Z.currentRoute.value.params.username,
          },
          actions: {
            setCurrentUser(e) {
              (this.currentUser = e || null), (this.currentId = e.id);
            },
            async logIn(e) {
              const t = (0, r.U)();
              this.setCurrentUser(t.getUser(e)), await s.Z.push("/home");
            },
            async logOut() {
              await s.Z.push("/home"),
                (this.currentUser = null),
                (this.currentId = null);
            },
            async signUp(e, t, a) {
              await s.Z.push("/home");
              const n = (0, r.U)();
              (this.currentUser = n.createUser(e, t, a)),
                (this.currentId = this.currentUser.id);
            },
            setProfileTab(e) {
              if (this.profileTab === e) return;
              const t = ["tweets", "tweets-and-replies", "media", "likes"];
              if (!t.includes(e)) throw Error("wrong tab");
              this.profileTab = e;
            },
            setTweetContext(e) {
              window.getSelection().toString().length > 0 ||
                s.Z.push({ name: "Tweet", params: { id: e } });
            },
            viewUserProfile(e) {
              s.Z.push({ name: "Profile", params: { username: e } });
            },
            toggleModal() {
              (this.showModal = !this.showModal),
                this.showModal || (this.modalType = "status");
            },
            setModalType(e) {
              const t = [
                "status",
                "reply",
                "edit-profile",
                "retweet-list",
                "like-list",
                "signup",
                "login",
              ];
              if (!t.includes(e)) throw Error("wrong modal type");
              this.modalType = e;
            },
            setModalReply(e, t) {
              this.modalReply = { userId: e, tweetId: t };
            },
            toast(e) {
              (this.showToast = !this.showToast), (this.toastText = e);
            },
          },
        });
      },
      7925: function (e, t, a) {
        a.d(t, {
          g: function () {
            return d;
          },
        });
        a(7658), a(541);
        var n = a(2578),
          r = a(988),
          s = a(3301),
          l = a.n(s);
        const i = new Date(),
          o = i.toISOString();
        var u = new (l())();
        const d = (0, n.Q_)("tweets", {
          state: () => ({
            tweets: [
              {
                id: "5",
                type: "reply",
                text: "nice",
                media: [],
                authorId: "1",
                replyCount: 0,
                retweetCount: 0,
                likeCount: 1,
                quoteCount: 0,
                timestamp: o,
                replyingToTweet: 1,
                replyingToUser: 2,
                quoting: null,
                repliesFrom: [],
                retweetsFrom: [],
                quotesFrom: [],
                likesFrom: ["2"],
              },
              {
                id: "1",
                type: "reply",
                text: "@renkode I think most people underestimate how #little being 5’4 is. I’m literally hopping around on my phone rn to type tjis out",
                media: [
                  "https://pbs.twimg.com/media/Fe_VPZRXwAcQJ8r?format=jpg&name=large",
                ],
                authorId: "2",
                replyCount: 4,
                retweetCount: 329,
                likeCount: 1438,
                quoteCount: 0,
                timestamp: o,
                replyingToTweet: null,
                replyingToUser: "1",
                quoting: null,
                repliesFrom: ["5"],
                retweetsFrom: [],
                quotesFrom: [],
                likesFrom: [],
              },
              {
                id: "2",
                type: "status",
                text: "lmao has survived the transition from early internet, and yet rofl has not. Much to consider. https://oh-vue-icons.js.org/",
                media: [
                  "https://pbs.twimg.com/media/Fe_7yHVUcAUwGVg?format=jpg&name=large",
                  "https://pbs.twimg.com/media/Fe2FJ3vUcAA_6zX?format=jpg&name=large",
                ],
                authorId: "1",
                replyCount: 0,
                retweetCount: 12,
                likeCount: 98,
                quoteCount: 0,
                timestamp: "2022-10-13T07:58:03.484Z",
                replyingToTweet: null,
                replyingToUser: null,
                quoting: null,
                repliesFrom: [],
                retweetsFrom: [],
                quotesFrom: [],
                likesFrom: [],
              },
              {
                id: "3",
                type: "status",
                text: "38 y/o gf who still says “sweet summer child”: they’re debating whether PAWG is a slur and i just can’t with the hellsite today.\n\nMe [heard “PAWG” and got so hard i got nauseous]: i think i hauve Covid",
                media: [
                  "https://pbs.twimg.com/media/Fe5WTVmXoAITutA?format=jpg&name=large",
                  "https://pbs.twimg.com/media/Fe5WT7-XoBoEEWt?format=jpg&name=large",
                  "https://pbs.twimg.com/media/Fe0r_ZgWAAEN8px?format=jpg&name=large",
                ],
                authorId: "1",
                replyCount: 0,
                retweetCount: 0,
                likeCount: 6,
                quoteCount: 0,
                timestamp: "2021-03-24T15:54:32-0400",
                replyingToTweet: null,
                replyingToUser: null,
                quoting: null,
                repliesFrom: [],
                retweetsFrom: [],
                quotesFrom: [],
                likesFrom: [],
              },
              {
                id: "4",
                type: "status",
                text: "uh-oh",
                media: [
                  "https://pbs.twimg.com/media/Fb6m91SWAAMsMeb?format=jpg&name=large",
                  "https://pbs.twimg.com/media/Fb6nCfbXwAMLCBi?format=jpg&name=large",
                  "https://pbs.twimg.com/media/Fb6nEFlXoAAE98n?format=jpg&name=large",
                  "https://pbs.twimg.com/media/Fb6nFGsWIAM9e-R?format=jpg&name=large",
                ],
                authorId: "1",
                replyCount: 1,
                retweetCount: 84,
                likeCount: 712,
                quoteCount: 0,
                timestamp: "2021-03-24T15:54:30-0400",
                replyingToTweet: null,
                replyingToUser: null,
                quoting: null,
                repliesFrom: [],
                retweetsFrom: [],
                quotesFrom: [],
                likesFrom: [],
              },
            ],
          }),
          getters: {},
          actions: {
            getTweet(e) {
              return this.tweets.filter((t) => t.id == e)[0];
            },
            addLike(e, t, a) {
              if (!t) return;
              const n = this.getTweet(e);
              if (!n) throw new Error(`tweet id ${e} does not exist`);
              n.likeCount++, n.likesFrom.push(t);
              const s = (0, r.U)();
              s.addLike(t, e),
                n.authorId !== t &&
                  (a
                    ? s.notify(n.authorId, t, "like-retweet", e)
                    : s.notify(n.authorId, t, "like-origin", e));
            },
            removeLike(e, t) {
              if (!t) return;
              const a = this.getTweet(e);
              if (!a) throw new Error(`tweet id ${e} does not exist`);
              a.likeCount--, a.likesFrom.splice(a.likesFrom.indexOf(t), 1);
              const n = (0, r.U)();
              n.removeLike(t, e);
            },
            hasLiked(e, t) {
              const a = this.getTweet(e);
              return !!a && a.likesFrom.includes(t);
            },
            addRetweet(e, t, a) {
              if (!t) return;
              const n = this.getTweet(e);
              if (!n) throw new Error(`tweet id ${e} does not exist`);
              n.retweetCount++, n.retweetsFrom.push(t);
              const s = (0, r.U)();
              s.addRetweet(t, e),
                s.addToLocalTimeline(
                  t,
                  e,
                  "retweet",
                  new Date().toISOString(),
                  t
                ),
                s.addToAllFollowerTimelines(
                  t,
                  e,
                  "retweet",
                  new Date().toISOString(),
                  t
                ),
                n.authorId !== t &&
                  (a
                    ? s.notify(n.authorId, t, "retweet-retweet", e)
                    : s.notify(n.authorId, t, "retweet-origin", e));
            },
            removeRetweet(e, t) {
              if (!t) return;
              const a = this.getTweet(e);
              if (!a) throw new Error("no such tweet");
              a.retweetCount--,
                a.retweetsFrom.splice(a.retweetsFrom.indexOf(t), 1);
              const n = (0, r.U)();
              n.removeRetweet(t, e),
                n.removeFromLocalTimeline(t, e),
                n.removeFromAllFollowerTimelines(t, e);
            },
            hasRetweeted(e, t) {
              const a = this.getTweet(e);
              return !!a && a.retweetsFrom.includes(t);
            },
            addTweet(
              e = "status",
              t = "",
              a = [],
              n,
              s = null,
              l = null,
              i = null
            ) {
              const o = new Date().toISOString(),
                d = {
                  id: u(),
                  type: e,
                  text: t,
                  media: [...a],
                  authorId: n,
                  replyCount: 0,
                  retweetCount: 0,
                  likeCount: 0,
                  quoteCount: 0,
                  timestamp: o,
                  replyingToTweet: s,
                  replyingToUser: l,
                  mentionedUsers: i,
                  quoting: null,
                  repliesFrom: [],
                  retweetsFrom: [],
                  quotesFrom: [],
                  likesFrom: [],
                };
              this.tweets.unshift(d),
                "reply" === e && s && this.getTweet(s).repliesFrom.push(d.id);
              const c = (0, r.U)(),
                p = a.length > 0;
              c.addTweet(n, d.id, e, p),
                c.addToLocalTimeline(n, d.id, e, o),
                c.addToAllFollowerTimelines(n, d.id, e, o),
                "reply" !== e || l === n
                  ? i &&
                    i.length > 0 &&
                    d.mentionedUsers.forEach((e) => {
                      c.getUser(e) &&
                        e !== n &&
                        c.notify(e, n, "mention", d.id);
                    })
                  : c.notify(l, n, e, d.id);
            },
            removeTweet(e, t) {
              const a = this.tweets.findIndex((t) => t.id === e);
              if (a < 0) throw new Error("no such tweet");
              const n = this.getTweet(this.tweets[a].replyingToTweet);
              n && (n.repliesFrom = n.repliesFrom.filter((t) => t !== e)),
                this.tweets.splice(a, 1);
              const s = (0, r.U)();
              s.removeTweet(t, e),
                s.removeLike(t, e),
                s.removeRetweet(t, e),
                s.removeFromLocalTimeline(t, e),
                s.removeFromAllFollowerTimelines(t, e),
                this.tweets[a].replyingToUser &&
                  s.deleteReplyNotification(this.tweets[a].replyingToUser, e);
            },
          },
        });
      },
      988: function (e, t, a) {
        a.d(t, {
          U: function () {
            return i;
          },
        });
        a(7658), a(541);
        var n = a(2578),
          r = a(3301),
          s = a.n(r),
          l = new (s())();
        const i = (0, n.Q_)("users", {
          state: () => ({
            users: [
              {
                id: "1",
                isAdmin: !0,
                name: "🍆",
                username: "renkode",
                description: "lorem ipsum #cool",
                location: "nowhere",
                website: "https://github.com/renkode/",
                birthday: "June 9",
                avatarUrl:
                  "https://pbs.twimg.com/profile_images/1566523505155268608/AEzCad1D_400x400.png",
                headerUrl:
                  "https://pbs.twimg.com/media/Fe8wtxmVQAAkipE?format=jpg&name=large",
                followingCount: 0,
                followerCount: 1,
                tweetCount: 3,
                timestamp: "2019-06-03T23:12:08.000Z",
                tweets: [
                  { id: "2", type: "status", containsMedia: !0 },
                  { id: "3", type: "status", containsMedia: !0 },
                  { id: "4", type: "status", containsMedia: !0 },
                  {
                    id: "5",
                    type: "reply",
                    timestamp: "2022-10-24T21:21:51.181Z",
                    fromUserId: "1",
                  },
                ],
                retweets: [],
                likes: [],
                following: [],
                followers: ["2"],
                localTimeline: [
                  {
                    id: "5",
                    type: "reply",
                    timestamp: "2022-10-24T21:21:51.181Z",
                    fromUserId: "1",
                  },
                  {
                    id: "2",
                    type: "status",
                    timestamp: "2022-10-24T21:21:54.735Z",
                    fromUserId: "1",
                  },
                  {
                    id: "3",
                    type: "status",
                    timestamp: "2022-10-24T21:21:53.427Z",
                    fromUserId: "1",
                  },
                  {
                    id: "4",
                    type: "status",
                    timestamp: "2022-10-24T21:21:51.181Z",
                    fromUserId: "1",
                  },
                ],
                newNotifications: [
                  { fromUser: "2", type: "follow", tweet: null },
                ],
                oldNotifications: [],
              },
              {
                id: "2",
                name: "← bearer of the curse",
                username: "mikulover",
                description:
                  "Randomly just made some toast pyon★. I am a freak pyon★",
                location: "h",
                website: "",
                birthday: "",
                avatarUrl:
                  "https://pbs.twimg.com/profile_images/1584210745247600643/mQ9zmvni_400x400.jpg",
                headerUrl:
                  "https://pbs.twimg.com/profile_banners/840764077681061889/1646410641/1500x500",
                followingCount: 1,
                followerCount: 0,
                tweetCount: 1,
                timestamp: "2020-02-03T23:12:08.000Z",
                tweets: [{ id: "1", type: "reply", containsMedia: !0 }],
                retweets: [],
                likes: [],
                following: ["1"],
                followers: [],
                localTimeline: [],
                newNotifications: [],
                oldNotifications: [],
              },
            ],
          }),
          getters: {},
          actions: {
            createUser(e, t, a) {
              const n = {
                id: l(),
                isAdmin: e,
                isPrivate: !1,
                name: t,
                username: a,
                description: "",
                location: "",
                website: "",
                birthday: "",
                avatarUrl: "",
                headerUrl: "",
                followingCount: 0,
                followerCount: 0,
                tweetCount: 0,
                timestamp: new Date().toISOString(),
                tweets: [],
                retweets: [],
                likes: [],
                following: [],
                followers: [],
                localTimeline: [],
                newNotifications: [],
                oldNotifications: [],
              };
              return this.users.push(n), n;
            },
            getUser(e) {
              return this.users.filter((t) => t.id == e)[0];
            },
            getUsername(e) {
              return this.users.filter((t) => t.id == e)[0]
                ? this.users.filter((t) => t.id == e)[0].username
                : null;
            },
            getUserByUsername(e) {
              return this.users.filter((t) => t.username == e)[0];
            },
            updateProfile(e, t, a, n, r, s, l, i, o) {
              const u = this.users.filter((t) => t.id == e)[0],
                d = this.users.findIndex((t) => t.id == e);
              (u.name = t),
                (u.username = a),
                (u.description = n),
                (u.location = r),
                (u.website = s),
                (u.birthday = l),
                (u.avatarUrl = i),
                (u.headerUrl = o),
                Object.assign(this.users[d], u);
            },
            addTweet(e, t, a = "status", n = !1) {
              const r = this.getUser(e);
              r.tweets.unshift({ id: t, type: a, containsMedia: n });
            },
            removeTweet(e, t) {
              const a = this.getUser(e),
                n = a.tweets.findIndex((e) => e.id == t);
              a.tweets.splice(n, 1);
            },
            addRetweet(e, t) {
              const a = this.getUser(e);
              a.retweets.push({ id: t, timestamp: new Date().toISOString() });
            },
            removeRetweet(e, t) {
              const a = this.getUser(e),
                n = a.retweets.findIndex((e) => e.id == t);
              a.retweets.splice(n, 1);
            },
            addLike(e, t) {
              const a = this.getUser(e);
              a.likes.push(t);
            },
            removeLike(e, t) {
              const a = this.getUser(e),
                n = a.likes.indexOf(t);
              a.likes.splice(n, 1);
            },
            addToLocalTimeline(e, t, a, n, r) {
              const s = this.getUser(e);
              s.localTimeline.filter((e) => e.id === t && e.type === a).length >
                0 ||
                s.localTimeline.unshift({
                  id: t,
                  type: a,
                  timestamp: n,
                  retweetedBy: r,
                });
            },
            addToAllFollowerTimelines(e, t, a, n, r) {
              const s = this.getUser(e);
              s.followers.forEach((e) => {
                this.addToLocalTimeline(e, t, a, n, r);
              });
            },
            removeFromLocalTimeline(e, t) {
              const a = this.getUser(e),
                n = a.localTimeline.findIndex((e) => e.id == t);
              a.localTimeline.splice(n, 1);
            },
            removeFromAllFollowerTimelines(e, t) {
              const a = this.getUser(e);
              a.followers.forEach((e) => {
                this.removeFromLocalTimeline(e, t);
              });
            },
            followUser(e, t) {
              const a = this.getUser(e),
                n = this.getUser(t);
              if (!n) throw new Error("user not found");
              a.followingCount++,
                a.following.unshift(t),
                n.followerCount++,
                n.followers.unshift(e),
                this.notify(t, e, "follow");
            },
            unfollowUser(e, t) {
              const a = this.getUser(e),
                n = this.getUser(t);
              if (!n) throw new Error("user not found");
              a.followingCount--,
                a.following.splice(a.following.indexOf(t, 1)),
                n.followerCount--,
                n.followers.splice(n.followers.indexOf(e, 1)),
                (a.localTimeline = a.localTimeline.filter(
                  (e) => e.fromUserId !== t
                ));
            },
            isFollowingUser(e, t) {
              const a = this.getUser(e);
              return a.following.includes(t);
            },
            canFollow(e, t) {
              return e.id != t && !e.following.includes(t);
            },
            canUnfollow(e, t) {
              return e.id != t && e.following.includes(t);
            },
            notify(e, t, a, n = null) {
              const r = this.getUser(e);
              if (!r) throw new Error("user not found");
              const s = { fromUser: t, type: a, tweetId: n };
              0 ===
                r.newNotifications.filter(
                  (e) =>
                    e.fromUser === s.fromUser &&
                    e.type === s.type &&
                    e.tweetId === s.tweetId
                ).length &&
                0 ===
                  r.oldNotifications.filter(
                    (e) =>
                      e.fromUser === s.fromUser &&
                      e.type === s.type &&
                      e.tweetId === s.tweetId
                  ).length &&
                r.newNotifications.unshift(s);
            },
            clearNotifications(e) {
              const t = this.getUser(e);
              if (!t) throw new Error("user not found");
              0 !== t.newNotifications.length &&
                ((t.oldNotifications = [
                  ...t.newNotifications,
                  ...t.oldNotifications,
                ]),
                (t.newNotifications = []));
            },
            deleteReplyNotification(e, t) {
              const a = this.getUser(e);
              if (!a) throw new Error("user not found");
              if (
                a.newNotifications.filter((e) => e.tweetId === t).length > 0
              ) {
                const e = a.newNotifications.findIndex((e) => e.tweetId === t);
                a.newNotifications.splice(e, 1);
              }
              if (
                a.oldNotifications.filter((e) => e.tweetId === t).length > 0
              ) {
                const e = a.oldNotifications.findIndex((e) => e.tweetId === t);
                a.oldNotifications.splice(e, 1);
              }
            },
            hasNewNotifications(e) {
              const t = this.getUser(e);
              if (!t) throw new Error("user not found");
              return t.newNotifications.length > 0;
            },
            getAllNotifications(e) {
              const t = this.getUser(e);
              if (!t) throw new Error("user not found");
              return [...t.newNotifications, ...t.oldNotifications];
            },
            isNewNotification(e, t) {
              const a = this.getUser(e);
              if (!a) throw new Error("user not found");
              return a.newNotifications.filter((e) => e === t).length > 0;
            },
            tweetIsNewNotification(e, t) {
              const a = this.getUser(e);
              if (!a) throw new Error("user not found");
              return (
                a.newNotifications.filter((e) => e.tweetId === t).length > 0
              );
            },
          },
        });
      },
      8168: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return C;
          },
        });
        var n = a(3396),
          r = a(9242),
          s = a(7139),
          l = a(4870),
          i = a(8341),
          o = a(8881),
          u = a(9327),
          d = a(988);
        const c = { class: "profile-pic-container" },
          p = { class: "user-body" },
          m = { class: "user-info-and-btn" },
          w = { class: "user-info-wrapper" },
          v = ["onClick"],
          f = { class: "username-wrapper" },
          g = { class: "username gray-text" },
          h = { key: 0, class: "follows-you gray-text" },
          y = { class: "description" };
        var U = {
            __name: "UserCard",
            props: ["id", "name", "username", "avatarUrl", "description"],
            setup(e) {
              const t = e,
                a = (0, u.q)(),
                U = (0, d.U)();
              function b() {
                a.viewUserProfile(t.username), a.showModal && a.toggleModal();
              }
              return (e, u) => (
                (0, n.wg)(),
                (0, n.iD)("div", { class: "user-container", onClick: b }, [
                  (0, n._)("div", c, [
                    (0, n.Wm)(
                      i.Z,
                      {
                        url: t.avatarUrl,
                        size: 48,
                        onClick: (0, r.iM)(b, ["stop"]),
                      },
                      null,
                      8,
                      ["url", "onClick"]
                    ),
                  ]),
                  (0, n._)("div", p, [
                    (0, n._)("div", m, [
                      (0, n._)("div", w, [
                        (0, n._)(
                          "span",
                          {
                            class: "display-name",
                            onClick: (0, r.iM)(b, ["stop"]),
                          },
                          [(0, n._)("a", null, (0, s.zw)(t.name), 1)],
                          8,
                          v
                        ),
                        (0, n._)("span", f, [
                          (0, n._)("span", g, " @" + (0, s.zw)(t.username), 1),
                          (0, l.SU)(a).currentId &&
                          (0, l.SU)(U).isFollowingUser(
                            t.id,
                            (0, l.SU)(a).currentId
                          )
                            ? ((0, n.wg)(),
                              (0, n.iD)("div", h, " Follows you "))
                            : (0, n.kq)("", !0),
                        ]),
                      ]),
                      (0, l.SU)(a).currentId
                        ? ((0, n.wg)(),
                          (0, n.j4)(o.Z, { key: 0, userId: t.id }, null, 8, [
                            "userId",
                          ]))
                        : (0, n.kq)("", !0),
                    ]),
                    (0, n._)("div", y, (0, s.zw)(t.description), 1),
                  ]),
                ])
              );
            },
          },
          b = a(89);
        const _ = (0, b.Z)(U, [["__scopeId", "data-v-eec34b3e"]]);
        var T = _;
        const k = { class: "user-list" },
          S = { key: 1, class: "error gray-text" };
        var x = {
          __name: "UserList",
          props: ["users"],
          setup(e) {
            return (t, a) => (
              (0, n.wg)(),
              (0, n.iD)("div", k, [
                e.users.length > 0
                  ? ((0, n.wg)(),
                    (0, n.j4)(
                      r.W3,
                      { key: 0, name: "fade-down" },
                      {
                        default: (0, n.w5)(() => [
                          ((0, n.wg)(!0),
                          (0, n.iD)(
                            n.HY,
                            null,
                            (0, n.Ko)(
                              e.users,
                              (e) => (
                                (0, n.wg)(),
                                (0, n.j4)(
                                  T,
                                  {
                                    key: e.id,
                                    id: e.id,
                                    name: e.name,
                                    username: e.username,
                                    avatarUrl: e.avatarUrl,
                                    description: e.description,
                                  },
                                  null,
                                  8,
                                  [
                                    "id",
                                    "name",
                                    "username",
                                    "avatarUrl",
                                    "description",
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
                  : ((0, n.wg)(), (0, n.iD)("div", S, "No users to display")),
              ])
            );
          },
        };
        const I = (0, b.Z)(x, [["__scopeId", "data-v-8d8fe586"]]);
        var C = I;
      },
      6752: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return C;
          },
        });
        a(7658);
        var n = a(3396),
          r = a(4870),
          s = a(9242),
          l = a(7139),
          i = a(8341),
          o = a(9327),
          u = a(7925),
          d = a(988),
          c = a(9707);
        const p = { class: "compose-tweet-container" },
          m = { class: "profile-pic-container" },
          w = { class: "compose-tweet-body" },
          v = { class: "compose-tweet-content" },
          f = ["src"],
          g = ["onClick"],
          h = { class: "compose-tweet-bar" },
          y = ["disabled"],
          U = ["id", "disabled"],
          b = ["for"],
          _ = { class: "limit-and-btn" },
          T = { class: "circle-wrapper" },
          k = ["disabled"];
        var S = {
            __name: "ComposeTweet",
            props: ["isModal"],
            setup(e) {
              const t = (0, o.q)(),
                a = (0, u.g)(),
                S = (0, d.U)(),
                x = (0, r.iH)(null),
                I = (0, r.iH)(null),
                C = (0, r.iH)([]),
                F = (0, r.iH)(""),
                M = (0, n.Fl)(() => t.currentUser),
                E = (0, n.Fl)(
                  () => 0 === F.value.length && 0 === C.value.length
                ),
                L = (0, n.Fl)(() => 4 === C.value.length),
                D = (0, n.Fl)(() => 280 - F.value.length),
                W = (0, n.Fl)(() => D.value <= 20),
                N = (0, n.Fl)(() => D.value <= 0),
                q = (e) => {
                  C.value.push(URL.createObjectURL(e.currentTarget.files[0]));
                },
                Z = (e) => {
                  C.value.splice(e, 1);
                },
                j = () => {
                  (x.value.style.height = ""),
                    (x.value.style.height = x.value.scrollHeight + "px");
                },
                H = () => {
                  j();
                },
                z = (e) => {
                  const t = e.replace(/\r?\n/, " ").split(" ")[0];
                  return (
                    console.log(t),
                    c.PH.test(t) && S.getUserByUsername(t.replace("@", ""))
                      ? S.getUserByUsername(t.replace("@", "")).id
                      : null
                  );
                },
                A = (e) =>
                  e
                    .replace(/\r?\n/, "")
                    .split(" ")
                    .some((e) => c.PH.test(e))
                    ? e
                        .split(" ")
                        .filter((t) => c.PH.test(t) && t !== e.split(" ")[0])
                        .map((e) => {
                          const t = S.getUserByUsername(e.replace("@", ""));
                          if (t) return t.id;
                        })
                    : null,
                V = () => {
                  if (E.value) return;
                  let e = "reply" === t.modalType ? t.modalReply.tweetId : null;
                  const n =
                      "reply" === t.modalType
                        ? t.modalReply.userId
                        : z(F.value),
                    r = A(F.value),
                    s = "reply" === t.modalType || n ? "reply" : "status";
                  a.addTweet(s, F.value, C.value, M.value.id, e, n, r),
                    (F.value = ""),
                    (C.value = []),
                    t.showModal && t.toggleModal();
                };
              return (
                (0, n.YP)(F, () => {
                  const e = (F.value.length / 280).toFixed(2);
                  W.value && D.value > 0
                    ? (I.value.style = `--circle: ${e}; --color: #ffd400; --outerRadius: 28px; --innerRadius: 24px;`)
                    : N.value
                    ? (I.value.style = `--circle: ${e}; --color: #f4212e;--outerRadius: 28px; --innerRadius: 24px;`)
                    : (I.value.style = `--circle: ${e}; --color: #1d9bf0;--outerRadius: 22px; --innerRadius: 18px;`);
                }),
                (0, n.bv)(() => {}),
                (t, a) => {
                  const o = (0, n.up)("v-icon");
                  return (
                    (0, n.wg)(),
                    (0, n.iD)("div", p, [
                      (0, n._)("div", m, [
                        (0, n.Wm)(
                          i.Z,
                          {
                            url: (0, r.SU)(M) ? (0, r.SU)(M).avatarUrl : "",
                            size: 48,
                          },
                          null,
                          8,
                          ["url"]
                        ),
                      ]),
                      (0, n._)("div", w, [
                        (0, n._)("div", v, [
                          (0, n.wy)(
                            (0, n._)(
                              "textarea",
                              {
                                ref_key: "textArea",
                                ref: x,
                                placeholder: "What's happening?",
                                onInput: H,
                                "onUpdate:modelValue":
                                  a[0] || (a[0] = (e) => (F.value = e)),
                                maxlength: "280",
                              },
                              null,
                              544
                            ),
                            [[s.nr, F.value]]
                          ),
                          C.value.length > 0
                            ? ((0, n.wg)(),
                              (0, n.iD)(
                                "div",
                                {
                                  key: 0,
                                  class: (0, l.C_)([
                                    "tweet-media",
                                    [(0, r.SU)(c.YM)(C.value)],
                                  ]),
                                },
                                [
                                  ((0, n.wg)(!0),
                                  (0, n.iD)(
                                    n.HY,
                                    null,
                                    (0, n.Ko)(
                                      C.value,
                                      (e) => (
                                        (0, n.wg)(),
                                        (0, n.iD)(
                                          "div",
                                          {
                                            class: "image-preview-wrapper",
                                            key: C.value.indexOf(e),
                                          },
                                          [
                                            (0, n._)(
                                              "img",
                                              {
                                                src: e,
                                                class: "image-preview",
                                              },
                                              null,
                                              8,
                                              f
                                            ),
                                            (0, n._)(
                                              "button",
                                              {
                                                class: "remove-image-btn",
                                                onClick: (t) =>
                                                  Z(C.value.indexOf(e)),
                                              },
                                              [
                                                (0, n.Wm)(o, {
                                                  name: "bi-x",
                                                  scale: "1.6",
                                                  fill: "white",
                                                }),
                                              ],
                                              8,
                                              g
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
                            : (0, n.kq)("", !0),
                        ]),
                        (0, n._)("div", h, [
                          (0, n._)(
                            "button",
                            { class: "add-image-btn", disabled: (0, r.SU)(L) },
                            [
                              (0, n._)(
                                "input",
                                {
                                  id:
                                    "upload-image-" +
                                    (e.isModal ? "modal" : ""),
                                  type: "file",
                                  accept: "image/png, image/gif, image/jpeg",
                                  onChange: q,
                                  hidden: "",
                                  disabled: (0, r.SU)(L),
                                },
                                null,
                                40,
                                U
                              ),
                              (0, n._)(
                                "label",
                                {
                                  for:
                                    "upload-image-" +
                                    (e.isModal ? "modal" : ""),
                                },
                                [
                                  (0, n.Wm)(o, {
                                    name: "ri-image-add-line",
                                    scale: "1.1",
                                    fill: "#1d9bf0",
                                  }),
                                ],
                                8,
                                b
                              ),
                            ],
                            8,
                            y
                          ),
                          (0, n._)("div", _, [
                            (0, n._)("span", T, [
                              (0, n._)(
                                "div",
                                {
                                  ref_key: "circle",
                                  ref: I,
                                  class: "circle",
                                  style: { "--circle": "0" },
                                },
                                [
                                  (0, r.SU)(W)
                                    ? ((0, n.wg)(),
                                      (0, n.iD)(
                                        "span",
                                        {
                                          key: 0,
                                          class: (0, l.C_)([
                                            "character-limit",
                                            { "red-text": (0, r.SU)(N) },
                                          ]),
                                        },
                                        (0, l.zw)((0, r.SU)(D)),
                                        3
                                      ))
                                    : (0, n.kq)("", !0),
                                ],
                                512
                              ),
                            ]),
                            (0, n._)(
                              "button",
                              {
                                class: "new-tweet-btn",
                                disabled:
                                  !(0, r.SU)(M) || (0, r.SU)(N) || (0, r.SU)(E),
                                onClick: a[1] || (a[1] = (e) => V(null)),
                              },
                              " Tweet ",
                              8,
                              k
                            ),
                          ]),
                        ]),
                      ]),
                    ])
                  );
                }
              );
            },
          },
          x = a(89);
        const I = (0, x.Z)(S, [["__scopeId", "data-v-197c4b5b"]]);
        var C = I;
      },
      8881: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return c;
          },
        });
        var n = a(4870),
          r = a(3396),
          s = a(9242),
          l = a(9327),
          i = a(988),
          o = {
            __name: "FollowButton",
            props: ["userId"],
            setup(e) {
              const t = e,
                a = (0, l.q)(),
                o = (0, i.U)();
              return (e, l) =>
                (0, n.SU)(o).canUnfollow((0, n.SU)(a).currentUser, t.userId)
                  ? ((0, r.wg)(),
                    (0, r.iD)("button", {
                      key: 0,
                      class: "following-btn",
                      onClick:
                        l[0] ||
                        (l[0] = (0, s.iM)(
                          (e) =>
                            (0, n.SU)(o).unfollowUser(
                              (0, n.SU)(a).currentId,
                              t.userId
                            ),
                          ["stop"]
                        )),
                    }))
                  : (0, n.SU)(o).canFollow((0, n.SU)(a).currentUser, t.userId)
                  ? ((0, r.wg)(),
                    (0, r.iD)(
                      "button",
                      {
                        key: 1,
                        class: "follow-btn",
                        onClick:
                          l[1] ||
                          (l[1] = (0, s.iM)(
                            (e) =>
                              (0, n.SU)(o).followUser(
                                (0, n.SU)(a).currentId,
                                t.userId
                              ),
                            ["stop"]
                          )),
                      },
                      " Follow "
                    ))
                  : (0, r.kq)("", !0);
            },
          },
          u = a(89);
        const d = (0, u.Z)(o, [["__scopeId", "data-v-4b2dcf9a"]]);
        var c = d;
      },
      1319: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return o;
          },
        });
        var n = a(3396),
          r = a(7139),
          s = {
            __name: "HeaderPicture",
            props: { url: String },
            setup(e) {
              const t = e;
              return (e, a) => (
                (0, n.wg)(),
                (0, n.iD)(
                  "div",
                  {
                    class: "header-img",
                    style: (0, r.j5)({ backgroundImage: `url(${t.url})` }),
                  },
                  null,
                  4
                )
              );
            },
          },
          l = a(89);
        const i = (0, l.Z)(s, [["__scopeId", "data-v-da93353a"]]);
        var o = i;
      },
      8341: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return o;
          },
        });
        var n = a(3396),
          r = a(7139),
          s = {
            __name: "ProfilePicture",
            props: { url: String, size: Number },
            setup(e) {
              const t = e;
              return (e, a) => (
                (0, n.wg)(),
                (0, n.iD)(
                  "div",
                  {
                    class: "profile-pic",
                    style: (0, r.j5)({
                      backgroundImage: `url(${t.url})`,
                      width: t.size + "px",
                      minWidth: t.size + "px",
                    }),
                  },
                  [(0, n.WI)(e.$slots, "default")],
                  4
                )
              );
            },
          },
          l = a(89);
        const i = (0, l.Z)(s, [["__scopeId", "data-v-9e7d4a8e"]]);
        var o = i;
      },
    },
    t = {};
  function a(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var s = (t[n] = { exports: {} });
    return e[n].call(s.exports, s, s.exports, a), s.exports;
  }
  (a.m = e),
    (function () {
      var e = [];
      a.O = function (t, n, r, s) {
        if (!n) {
          var l = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (n = e[d][0]), (r = e[d][1]), (s = e[d][2]);
            for (var i = !0, o = 0; o < n.length; o++)
              (!1 & s || l >= s) &&
              Object.keys(a.O).every(function (e) {
                return a.O[e](n[o]);
              })
                ? n.splice(o--, 1)
                : ((i = !1), s < l && (l = s));
            if (i) {
              e.splice(d--, 1);
              var u = r();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        s = s || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
        e[d] = [n, r, s];
      };
    })(),
    (function () {
      a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return a.d(t, { a: t }), t;
      };
    })(),
    (function () {
      a.d = function (e, t) {
        for (var n in t)
          a.o(t, n) &&
            !a.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      (a.f = {}),
        (a.e = function (e) {
          return Promise.all(
            Object.keys(a.f).reduce(function (t, n) {
              return a.f[n](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      a.u = function (e) {
        return (
          "js/" +
          e +
          "." +
          {
            3: "862ca63f",
            156: "43692483",
            456: "b9b8675a",
            462: "179205d5",
            473: "30a211ba",
            539: "e50396a0",
            768: "28944bfb",
            927: "c764746a",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      a.miniCssF = function (e) {
        return (
          "css/" +
          e +
          "." +
          {
            3: "283bcb56",
            156: "1c31afbb",
            462: "5ffe88bc",
            473: "9e4d3db9",
            539: "804165ac",
            768: "22221875",
          }[e] +
          ".css"
        );
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "chitter:";
      a.l = function (n, r, s, l) {
        if (e[n]) e[n].push(r);
        else {
          var i, o;
          if (void 0 !== s)
            for (
              var u = document.getElementsByTagName("script"), d = 0;
              d < u.length;
              d++
            ) {
              var c = u[d];
              if (
                c.getAttribute("src") == n ||
                c.getAttribute("data-webpack") == t + s
              ) {
                i = c;
                break;
              }
            }
          i ||
            ((o = !0),
            (i = document.createElement("script")),
            (i.charset = "utf-8"),
            (i.timeout = 120),
            a.nc && i.setAttribute("nonce", a.nc),
            i.setAttribute("data-webpack", t + s),
            (i.src = n)),
            (e[n] = [r]);
          var p = function (t, a) {
              (i.onerror = i.onload = null), clearTimeout(m);
              var r = e[n];
              if (
                (delete e[n],
                i.parentNode && i.parentNode.removeChild(i),
                r &&
                  r.forEach(function (e) {
                    return e(a);
                  }),
                t)
              )
                return t(a);
            },
            m = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = p.bind(null, i.onerror)),
            (i.onload = p.bind(null, i.onload)),
            o && document.head.appendChild(i);
        }
      };
    })(),
    (function () {
      a.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      a.p = "/chitter/";
    })(),
    (function () {
      var e = function (e, t, a, n) {
          var r = document.createElement("link");
          (r.rel = "stylesheet"), (r.type = "text/css");
          var s = function (s) {
            if (((r.onerror = r.onload = null), "load" === s.type)) a();
            else {
              var l = s && ("load" === s.type ? "missing" : s.type),
                i = (s && s.target && s.target.href) || t,
                o = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                );
              (o.code = "CSS_CHUNK_LOAD_FAILED"),
                (o.type = l),
                (o.request = i),
                r.parentNode.removeChild(r),
                n(o);
            }
          };
          return (
            (r.onerror = r.onload = s),
            (r.href = t),
            document.head.appendChild(r),
            r
          );
        },
        t = function (e, t) {
          for (
            var a = document.getElementsByTagName("link"), n = 0;
            n < a.length;
            n++
          ) {
            var r = a[n],
              s = r.getAttribute("data-href") || r.getAttribute("href");
            if ("stylesheet" === r.rel && (s === e || s === t)) return r;
          }
          var l = document.getElementsByTagName("style");
          for (n = 0; n < l.length; n++) {
            (r = l[n]), (s = r.getAttribute("data-href"));
            if (s === e || s === t) return r;
          }
        },
        n = function (n) {
          return new Promise(function (r, s) {
            var l = a.miniCssF(n),
              i = a.p + l;
            if (t(l, i)) return r();
            e(n, i, r, s);
          });
        },
        r = { 143: 0 };
      a.f.miniCss = function (e, t) {
        var a = { 3: 1, 156: 1, 462: 1, 473: 1, 539: 1, 768: 1 };
        r[e]
          ? t.push(r[e])
          : 0 !== r[e] &&
            a[e] &&
            t.push(
              (r[e] = n(e).then(
                function () {
                  r[e] = 0;
                },
                function (t) {
                  throw (delete r[e], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var e = { 143: 0 };
      (a.f.j = function (t, n) {
        var r = a.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var s = new Promise(function (a, n) {
              r = e[t] = [a, n];
            });
            n.push((r[2] = s));
            var l = a.p + a.u(t),
              i = new Error(),
              o = function (n) {
                if (a.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    l = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + s + ": " + l + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = s),
                    (i.request = l),
                    r[1](i);
                }
              };
            a.l(l, o, "chunk-" + t, t);
          }
      }),
        (a.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, n) {
          var r,
            s,
            l = n[0],
            i = n[1],
            o = n[2],
            u = 0;
          if (
            l.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in i) a.o(i, r) && (a.m[r] = i[r]);
            if (o) var d = o(a);
          }
          for (t && t(n); u < l.length; u++)
            (s = l[u]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return a.O(d);
        },
        n = (self["webpackChunkchitter"] = self["webpackChunkchitter"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = a.O(void 0, [998], function () {
    return a(7625);
  });
  n = a.O(n);
})();
//# sourceMappingURL=app.01864b59.js.map