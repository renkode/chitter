(function () {
  "use strict";
  var e = {
      3657: function (e, t, a) {
        var n = a(9242),
          r = a(2578),
          s = a(1922),
          l = a(1120),
          o = a(3396),
          i = a(4870),
          u = a(7139),
          d = a(9327),
          c = a(988),
          p = a(8341);
        const m = (e) => (
            (0, o.dD)("data-v-2fe4a0ec"), (e = e()), (0, o.Cn)(), e
          ),
          f = { class: "nav-sidebar" },
          w = { class: "nav-item" },
          v = { class: "nav-icon" },
          g = { class: "nav-item" },
          h = { class: "nav-icon" },
          y = m(() => (0, o._)("span", { class: "nav-label" }, "Home", -1)),
          _ = { class: "nav-item" },
          b = { class: "nav-icon stroke" },
          U = m(() => (0, o._)("span", { class: "nav-label" }, "Explore", -1)),
          T = { class: "nav-item" },
          k = { class: "nav-icon notif-icon" },
          x = { key: 0, class: "notification-dot" },
          S = m(() =>
            (0, o._)("span", { class: "nav-label" }, "Notifications", -1)
          ),
          F = { class: "nav-item" },
          I = { class: "nav-icon" },
          C = m(() => (0, o._)("span", { class: "nav-label" }, "Profile", -1)),
          M = { class: "new-tweet-btn-feather" },
          N = m(() =>
            (0, o._)("span", { class: "new-tweet-btn-label" }, "Tweet", -1)
          ),
          D = ["onClick"],
          q = { class: "user-info-and-btn" },
          W = { class: "user-info-wrapper" },
          E = { class: "display-name" },
          Z = { class: "username gray-text" },
          j = { class: "tweet-action-icon extra-btn" },
          A = { key: 0, class: "overlay" },
          L = { key: 1, class: "tweet-menu-container" },
          z = { class: "tweet-menu-list" };
        var R = {
            __name: "MenuSidebar",
            setup(e) {
              const t = (0, c.U)(),
                a = (0, d.q)(),
                r = (0, i.iH)(!1),
                s = (0, o.Fl)(() => a.currentUser.newNotifications.length),
                l = () => {
                  a.setModalType("status"), a.toggleModal();
                },
                m = () => {
                  a.showModal && a.toggleModal();
                },
                R = () => {
                  r.value = !r.value;
                },
                H = () => {
                  "1" === a.currentId
                    ? a.setCurrentUser(t.getUser("2"))
                    : a.setCurrentUser(t.getUser("1"));
                };
              return (e, t) => {
                const d = (0, o.up)("v-icon"),
                  c = (0, o.up)("router-link");
                return (
                  (0, o.wg)(),
                  (0, o.iD)("div", f, [
                    (0, o._)("nav", null, [
                      (0, o._)("ul", null, [
                        (0, o.Wm)(
                          c,
                          { to: "/home", class: "nav-logo", onClick: m },
                          {
                            default: (0, o.w5)(() => [
                              (0, o._)("li", w, [
                                (0, o._)("span", v, [
                                  (0, o.Wm)(d, {
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
                        (0, o.Wm)(
                          c,
                          { to: "/home", onClick: m },
                          {
                            default: (0, o.w5)(() => [
                              (0, o._)("li", g, [
                                (0, o._)("span", h, [
                                  (0, o.Wm)(d, {
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
                        (0, o.Wm)(
                          c,
                          { to: "/explore", onClick: m },
                          {
                            default: (0, o.w5)(() => [
                              (0, o._)("li", _, [
                                (0, o._)("span", b, [
                                  (0, o.Wm)(d, {
                                    name: "hi-hashtag",
                                    scale: "1.6",
                                    fill: "#ffffff80",
                                  }),
                                ]),
                                U,
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, o.Wm)(
                          c,
                          { to: "/notifications", onClick: m },
                          {
                            default: (0, o.w5)(() => [
                              (0, o._)("li", T, [
                                (0, o._)("span", k, [
                                  (0, o.Wm)(d, {
                                    name: "bi-bell",
                                    scale: "1.7",
                                    fill: "#ffffff80",
                                  }),
                                  (0, i.SU)(a).currentUser && (0, i.SU)(s) > 0
                                    ? ((0, o.wg)(),
                                      (0, o.iD)(
                                        "div",
                                        x,
                                        (0, u.zw)((0, i.SU)(s)),
                                        1
                                      ))
                                    : (0, o.kq)("", !0),
                                ]),
                                S,
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, i.SU)(a).currentUser
                          ? ((0, o.wg)(),
                            (0, o.j4)(
                              c,
                              {
                                key: 0,
                                onClick: m,
                                to: {
                                  name: "Profile",
                                  params: {
                                    username: (0, i.SU)(a).currentUser.username,
                                  },
                                },
                              },
                              {
                                default: (0, o.w5)(() => [
                                  (0, o._)("li", F, [
                                    (0, o._)("span", I, [
                                      (0, o.Wm)(d, {
                                        name: "bi-person",
                                        scale: "2.0",
                                        fill: "#ffffff80",
                                      }),
                                    ]),
                                    C,
                                  ]),
                                ]),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ))
                          : (0, o.kq)("", !0),
                      ]),
                      (0, o._)(
                        "button",
                        { class: "new-tweet-btn", onClick: l },
                        [
                          (0, o._)("span", M, [
                            (0, o.Wm)(d, { name: "gi-feather", scale: "1.8" }),
                          ]),
                          N,
                        ]
                      ),
                      (0, i.SU)(a).currentUser
                        ? ((0, o.wg)(),
                          (0, o.iD)(
                            "li",
                            {
                              key: 0,
                              class: "nav-user",
                              onClick: (0, n.iM)(R, ["stop"]),
                            },
                            [
                              (0, o._)("div", q, [
                                (0, o.Wm)(
                                  p.Z,
                                  {
                                    url: (0, i.SU)(a).currentUser.avatarUrl,
                                    size: 40,
                                  },
                                  null,
                                  8,
                                  ["url"]
                                ),
                                (0, o._)("div", W, [
                                  (0, o._)(
                                    "span",
                                    E,
                                    (0, u.zw)((0, i.SU)(a).currentUser.name),
                                    1
                                  ),
                                  (0, o._)(
                                    "span",
                                    Z,
                                    "@" +
                                      (0, u.zw)(
                                        (0, i.SU)(a).currentUser.username
                                      ),
                                    1
                                  ),
                                ]),
                              ]),
                              (0, o._)("span", j, [
                                (0, o.Wm)(d, {
                                  name: "hi-dots-horizontal",
                                  scale: "1.0",
                                  fill: "#ffffff80",
                                }),
                              ]),
                              r.value
                                ? ((0, o.wg)(), (0, o.iD)("div", A))
                                : (0, o.kq)("", !0),
                              r.value
                                ? ((0, o.wg)(),
                                  (0, o.iD)("div", L, [
                                    (0, o._)("ul", z, [
                                      (0, o._)(
                                        "li",
                                        {
                                          class: "tweet-menu-item",
                                          onClick: H,
                                        },
                                        " Log out @" +
                                          (0, u.zw)(
                                            (0, i.SU)(a).currentUser.username
                                          ),
                                        1
                                      ),
                                    ]),
                                  ]))
                                : (0, o.kq)("", !0),
                            ],
                            8,
                            D
                          ))
                        : (0, o.kq)("", !0),
                    ]),
                  ])
                );
              };
            },
          },
          H = a(89);
        const O = (0, H.Z)(R, [["__scopeId", "data-v-2fe4a0ec"]]);
        var P = O;
        const Y = (e) => (
            (0, o.dD)("data-v-1fe246ef"), (e = e()), (0, o.Cn)(), e
          ),
          B = { key: 0, class: "media-sidebar" },
          V = { class: "media-wrapper" },
          $ = { class: "search-tweet" },
          J = { class: "search-icon" },
          G = Y(() =>
            (0, o._)(
              "input",
              { type: "search", placeholder: "Search Chitter" },
              null,
              -1
            )
          ),
          X = (0, o.uE)(
            '<div class="trending-wrapper" data-v-1fe246ef><div class="trending-header" data-v-1fe246ef>What&#39;s happening</div><div class="trend-container" data-v-1fe246ef><div class="trend-info" data-v-1fe246ef><span class="trend-type" data-v-1fe246ef>World news</span><span class="trend-headline" data-v-1fe246ef>Lorem ipsum generator leaves 2 killed, 8 injured</span><span class="trend-tweets" data-v-1fe246ef>56,182 Tweets</span></div><div class="trend-media" data-v-1fe246ef></div></div><div class="trend-container" data-v-1fe246ef><div class="trend-info" data-v-1fe246ef><span class="trend-type" data-v-1fe246ef>Trending in Video games</span><span class="trend-headline" data-v-1fe246ef>HE&#39;S UGLY</span><span class="trend-tweets" data-v-1fe246ef>32,478 Tweets</span></div></div><div class="trend-container" data-v-1fe246ef><div class="trend-info" data-v-1fe246ef><span class="trend-type" data-v-1fe246ef>Trending in Vatican City</span><span class="trend-headline" data-v-1fe246ef>#sanssweep</span><span class="trend-tweets" data-v-1fe246ef>4,200 Tweets</span></div></div></div><footer data-v-1fe246ef> Developed by <a href="https://github.com/renkode/" data-v-1fe246ef>renkode</a></footer>',
            2
          );
        var Q = {
          __name: "MediaSidebar",
          setup(e) {
            const t = (0, i.iH)(window.innerWidth),
              a = () => {
                t.value = window.innerWidth;
              };
            return (
              (0, o.bv)(() => {
                window.addEventListener("resize", a);
              }),
              (0, o.Ah)(() => {
                window.removeEventListener("resize");
              }),
              (e, a) => {
                const n = (0, o.up)("v-icon");
                return t.value >= 1005
                  ? ((0, o.wg)(),
                    (0, o.iD)("div", B, [
                      (0, o._)("div", V, [
                        (0, o._)("div", $, [
                          (0, o._)("span", J, [
                            (0, o.Wm)(n, {
                              name: "hi-search",
                              fill: "#ffffffd5",
                              scale: "1.3",
                            }),
                          ]),
                          G,
                        ]),
                        X,
                      ]),
                    ]))
                  : (0, o.kq)("", !0);
              }
            );
          },
        };
        const K = (0, H.Z)(Q, [["__scopeId", "data-v-1fe246ef"]]);
        var ee = K;
        const te = { class: "page-header" },
          ae = { key: 0, class: "profile-wrapper" },
          ne = { key: 0, class: "user-info-wrapper" },
          re = { class: "display-name" },
          se = { class: "total-tweet-count gray-text" },
          le = { key: 1, style: { "text-transform": "capitalize" } },
          oe = { key: 1, style: { "text-transform": "capitalize" } };
        var ie = {
          __name: "HeaderSC",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, c.U)(),
              n = (0, o.Fl)(function () {
                return a.getUserByUsername(t.routeUsername);
              }),
              r = (0, o.Fl)(() => {
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
              const s = (0, o.up)("v-icon");
              return (
                (0, o.wg)(),
                (0, o.iD)("div", te, [
                  (0, i.SU)(r)
                    ? ((0, o.wg)(),
                      (0, o.iD)("span", ae, [
                        (0, o._)(
                          "span",
                          {
                            class: "back-arrow-btn",
                            onClick:
                              a[0] || (a[0] = (e) => (0, i.SU)(l.Z).back()),
                          },
                          [
                            (0, o.Wm)(s, {
                              name: "md-arrowback",
                              scale: "1.1",
                              fill: "#ffffff80",
                            }),
                          ]
                        ),
                        (0, i.SU)(n) &&
                        "tweet" !== (0, i.SU)(t).view &&
                        "notifications" !== (0, i.SU)(t).view
                          ? ((0, o.wg)(),
                            (0, o.iD)("div", ne, [
                              (0, o._)(
                                "span",
                                re,
                                (0, u.zw)((0, i.SU)(n).name),
                                1
                              ),
                              (0, o._)(
                                "span",
                                se,
                                (0, u.zw)((0, i.SU)(n).tweetCount) + " Tweets",
                                1
                              ),
                            ]))
                          : ((0, o.wg)(),
                            (0, o.iD)(
                              "span",
                              le,
                              (0, u.zw)((0, i.SU)(t).routeName),
                              1
                            )),
                      ]))
                    : ((0, o.wg)(),
                      (0, o.iD)(
                        "span",
                        oe,
                        (0, u.zw)((0, i.SU)(t).routeName),
                        1
                      )),
                ])
              );
            };
          },
        };
        const ue = (0, H.Z)(ie, [["__scopeId", "data-v-1e200c1b"]]);
        var de = ue,
          ce = a(7427);
        const pe = { class: "load-wrapper" },
          me = (0, o._)("div", { class: "loader" }, null, -1),
          fe = [me];
        var we = {
          __name: "LoadSpinner",
          setup(e) {
            return (e, t) => ((0, o.wg)(), (0, o.iD)("div", pe, fe));
          },
        };
        const ve = we;
        var ge = ve,
          he = a(1319),
          ye = a(9707);
        const _e = (e) => (
            (0, o.dD)("data-v-e5a19658"), (e = e()), (0, o.Cn)(), e
          ),
          be = { class: "modal-wrapper" },
          Ue = { class: "modal-header" },
          Te = { class: "header-item-wrapper" },
          ke = _e(() =>
            (0, o._)(
              "span",
              { class: "header-text" },
              [(0, o._)("strong", null, "Edit profile")],
              -1
            )
          ),
          xe = ["disabled", "onClick"],
          Se = { class: "header-wrapper" },
          Fe = { class: "image-actions" },
          Ie = { class: "set-image-btn" },
          Ce = { for: "upload-header" },
          Me = { class: "modal-content" },
          Ne = { class: "avatar-wrapper" },
          De = { class: "image-actions" },
          qe = { class: "set-image-btn" },
          We = { for: "upload-avatar" },
          Ee = { class: "modal-form" },
          Ze = { class: "name-and-username" },
          je = { class: "validation-wrapper" },
          Ae = { class: "label-wrapper" },
          Le = _e(() =>
            (0, o._)(
              "label",
              { class: "gray-text", for: "nameInput" },
              "Name",
              -1
            )
          ),
          ze = { class: "text-limit gray-text" },
          Re = { key: 0, class: "error-input red-text" },
          He = { class: "validation-wrapper" },
          Oe = { class: "label-wrapper" },
          Pe = _e(() =>
            (0, o._)(
              "label",
              { class: "gray-text", for: "usernameInput" },
              "Username",
              -1
            )
          ),
          Ye = { class: "text-limit gray-text" },
          Be = { key: 0, class: "error-input red-text" },
          Ve = { key: 1, class: "error-input red-text" },
          $e = { key: 2, class: "error-input red-text" },
          Je = { class: "input-wrapper" },
          Ge = { class: "label-wrapper" },
          Xe = _e(() =>
            (0, o._)(
              "label",
              { class: "gray-text", for: "bioInput" },
              "Bio",
              -1
            )
          ),
          Qe = { class: "text-limit gray-text" },
          Ke = { class: "input-wrapper" },
          et = { class: "label-wrapper" },
          tt = _e(() =>
            (0, o._)(
              "label",
              { class: "gray-text", for: "locationInput" },
              "Location",
              -1
            )
          ),
          at = { class: "text-limit gray-text" },
          nt = { class: "validation-wrapper" },
          rt = { class: "label-wrapper" },
          st = _e(() =>
            (0, o._)(
              "label",
              { class: "gray-text", for: "websiteInput" },
              "Website",
              -1
            )
          ),
          lt = { class: "text-limit gray-text" },
          ot = { key: 0, class: "error-input red-text" },
          it = { class: "birthday-wrapper" },
          ut = _e(() =>
            (0, o._)(
              "span",
              { class: "birthday-label gray-text" },
              "Birth date",
              -1
            )
          ),
          dt = { class: "birthday-input-wrapper" };
        var ct = {
          __name: "ModalProfile",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, c.U)(),
              r = (0, i.iH)(t.currentUser.headerUrl),
              s = (0, i.iH)(t.currentUser.avatarUrl),
              l = (0, i.iH)(t.currentUser.name),
              m = (0, i.iH)(t.currentUser.username),
              f = (0, i.iH)(t.currentUser.description),
              w = (0, i.iH)(t.currentUser.location),
              v = (0, i.iH)(t.currentUser.website),
              g = (0, i.iH)(null),
              h = (0, i.iH)(null),
              y = (0, i.iH)(null),
              _ = (0, i.iH)(null),
              b = (0, i.iH)(null),
              U = (0, o.Fl)(() => 0 === l.value.length),
              T = 3,
              k = new RegExp("^[a-zA-Z0-9_]*$"),
              x = (0, o.Fl)(() => k.test(m.value)),
              S = (0, o.Fl)(
                () =>
                  a.users.filter(
                    (e) => t.currentId !== e.id && e.username == m.value
                  ).length > 0
              ),
              F = (0, o.Fl)(
                () =>
                  (m.value.length >= 0 && m.value.length < T) ||
                  !x.value ||
                  S.value
              ),
              I = new RegExp(
                /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i
              ),
              C = (0, o.Fl)(() => I.test(v.value)),
              M = (0, o.Fl)(() => !C.value && v.value.length > 0),
              N = (0, o.Fl)(() => U.value || F.value || M.value),
              D = (e) => {
                s.value = URL.createObjectURL(e.currentTarget.files[0]);
              },
              q = (e) => {
                r.value = URL.createObjectURL(e.currentTarget.files[0]);
              },
              W = () => {
                r.value = "";
              },
              E = (e) => {
                e.currentTarget.nextElementSibling
                  .querySelector("label")
                  .classList.toggle("gray-text"),
                  e.currentTarget.nextElementSibling
                    .querySelector("label")
                    .classList.toggle("blue-text"),
                  e.currentTarget.nextElementSibling
                    .querySelector(".text-limit")
                    .classList.toggle("show"),
                  e.currentTarget
                    .closest(".input-wrapper")
                    .classList.toggle("blue-border");
              },
              Z = () => {
                ye.YN.forEach((e) => {
                  var a = document.createElement("option");
                  t.currentUser.birthday.split(" ")[0] === e.month &&
                    (a.selected = !0),
                    (a.value = e.month),
                    (a.textContent = e.month),
                    _.value.appendChild(a);
                });
              },
              j = () => {
                if (((b.value.innerHTML = ""), "" === _.value.value)) return;
                const e = ye.YN.filter((e) => e.month === _.value.value)[0]
                    .days,
                  [a, n] = t.currentUser.birthday.split(" ");
                for (let t = 1; t <= e; t++) {
                  var r = document.createElement("option");
                  a === _.value.value && n == t && (r.selected = !0),
                    (r.value = t),
                    (r.textContent = t),
                    b.value.appendChild(r);
                }
              },
              A = () => {
                const e = `${_.value.value} ${b.value.value}`;
                a.updateProfile(
                  t.currentId,
                  l.value,
                  m.value,
                  f.value,
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
              (0, o.YP)(l, () => {
                U.value
                  ? ((g.value.className = "input-wrapper red-border"),
                    (g.value.querySelector("label").className = "red-text"))
                  : ((g.value.className = "input-wrapper blue-border"),
                    (g.value.querySelector("label").className = "blue-text"));
              }),
              (0, o.YP)(m, () => {
                F.value
                  ? ((h.value.className = "input-wrapper red-border"),
                    (h.value.querySelector("label").className = "red-text"))
                  : ((h.value.className = "input-wrapper blue-border"),
                    (h.value.querySelector("label").className = "blue-text"));
              }),
              (0, o.YP)(v, () => {
                M.value
                  ? ((y.value.className = "input-wrapper red-border"),
                    (y.value.querySelector("label").className = "red-text"))
                  : ((y.value.className = "input-wrapper blue-border"),
                    (y.value.querySelector("label").className = "blue-text"));
              }),
              (0, o.bv)(() => {
                Z(), j();
              }),
              (e, a) => {
                const d = (0, o.up)("v-icon");
                return (
                  (0, o.wg)(),
                  (0, o.iD)("div", be, [
                    (0, o._)("div", Ue, [
                      (0, o._)("span", Te, [
                        (0, o._)(
                          "span",
                          {
                            class: "exit-modal-btn",
                            onClick:
                              a[0] ||
                              (a[0] = (...e) =>
                                (0, i.SU)(t).toggleModal &&
                                (0, i.SU)(t).toggleModal(...e)),
                          },
                          [
                            (0, o.Wm)(d, {
                              name: "bi-x",
                              scale: "1.6",
                              fill: "white",
                            }),
                          ]
                        ),
                        ke,
                      ]),
                      (0, o._)(
                        "button",
                        {
                          class: "save-btn",
                          disabled: (0, i.SU)(N),
                          onClick: (0, n.iM)(A, ["prevent"]),
                        },
                        " Save ",
                        8,
                        xe
                      ),
                    ]),
                    (0, o._)("div", Se, [
                      (0, o.Wm)(he.Z, { url: r.value }, null, 8, ["url"]),
                      (0, o._)("span", Fe, [
                        (0, o._)("span", Ie, [
                          (0, o._)(
                            "input",
                            {
                              id: "upload-header",
                              type: "file",
                              accept: "image/png, image/gif, image/jpeg",
                              onChange: q,
                              hidden: "",
                            },
                            null,
                            32
                          ),
                          (0, o._)("label", Ce, [
                            (0, o.Wm)(d, {
                              name: "md-addaphoto-outlined",
                              scale: "1.0",
                              fill: "white",
                            }),
                          ]),
                        ]),
                        (0, o._)(
                          "span",
                          { class: "clear-header-btn", onClick: W },
                          [
                            (0, o.Wm)(d, {
                              name: "bi-x",
                              scale: "1.6",
                              fill: "white",
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    (0, o._)("div", Me, [
                      (0, o._)("div", Ne, [
                        (0, o.Wm)(
                          p.Z,
                          { url: s.value, size: 112 },
                          {
                            default: (0, o.w5)(() => [
                              (0, o._)("span", De, [
                                (0, o._)("span", qe, [
                                  (0, o._)(
                                    "input",
                                    {
                                      id: "upload-avatar",
                                      type: "file",
                                      accept:
                                        "image/png, image/gif, image/jpeg",
                                      onChange: D,
                                      hidden: "",
                                    },
                                    null,
                                    32
                                  ),
                                  (0, o._)("label", We, [
                                    (0, o.Wm)(d, {
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
                      (0, o._)("div", Ee, [
                        (0, o._)("div", Ze, [
                          (0, o._)("div", je, [
                            (0, o._)(
                              "div",
                              {
                                class: "input-wrapper",
                                ref_key: "nameInputWrapper",
                                ref: g,
                              },
                              [
                                (0, o.wy)(
                                  (0, o._)(
                                    "input",
                                    {
                                      id: "nameInput",
                                      type: "text",
                                      "onUpdate:modelValue":
                                        a[1] || (a[1] = (e) => (l.value = e)),
                                      onFocusin: E,
                                      onFocusout: E,
                                      "min-length": "1",
                                      maxlength: "50",
                                    },
                                    null,
                                    544
                                  ),
                                  [[n.nr, l.value]]
                                ),
                                (0, o._)("span", Ae, [
                                  Le,
                                  (0, o._)(
                                    "span",
                                    ze,
                                    (0, u.zw)(l.value.length) + " / 50",
                                    1
                                  ),
                                ]),
                              ],
                              512
                            ),
                            0 === l.value.length
                              ? ((0, o.wg)(),
                                (0, o.iD)("span", Re, "Name can't be blank."))
                              : (0, o.kq)("", !0),
                          ]),
                          (0, o._)("div", He, [
                            (0, o._)(
                              "div",
                              {
                                class: "input-wrapper",
                                ref_key: "usernameInputWrapper",
                                ref: h,
                              },
                              [
                                (0, o.wy)(
                                  (0, o._)(
                                    "input",
                                    {
                                      id: "usernameInput",
                                      type: "text",
                                      "onUpdate:modelValue":
                                        a[2] || (a[2] = (e) => (m.value = e)),
                                      onFocusin: E,
                                      onFocusout: E,
                                      onKeydown:
                                        a[3] ||
                                        (a[3] = (0, n.D2)(
                                          (0, n.iM)(() => {}, ["prevent"]),
                                          ["space"]
                                        )),
                                      minlength: T,
                                      maxlength: "15",
                                    },
                                    null,
                                    544
                                  ),
                                  [[n.nr, m.value]]
                                ),
                                (0, o._)("span", Oe, [
                                  Pe,
                                  (0, o._)(
                                    "span",
                                    Ye,
                                    (0, u.zw)(m.value.length) + " / 15",
                                    1
                                  ),
                                ]),
                              ],
                              512
                            ),
                            m.value.length > 0 && m.value.length < T
                              ? ((0, o.wg)(),
                                (0, o.iD)(
                                  "span",
                                  Be,
                                  "Username must be at least " +
                                    (0, u.zw)(T) +
                                    " characters."
                                ))
                              : (0, o.kq)("", !0),
                            (0, i.SU)(x)
                              ? (0, o.kq)("", !0)
                              : ((0, o.wg)(),
                                (0, o.iD)(
                                  "span",
                                  Ve,
                                  "Username can't contain special characters."
                                )),
                            (0, i.SU)(S)
                              ? ((0, o.wg)(),
                                (0, o.iD)("span", $e, "Username is taken."))
                              : (0, o.kq)("", !0),
                          ]),
                        ]),
                        (0, o._)("div", Je, [
                          (0, o.wy)(
                            (0, o._)(
                              "textarea",
                              {
                                id: "bioInput",
                                "onUpdate:modelValue":
                                  a[4] || (a[4] = (e) => (f.value = e)),
                                onFocusin: E,
                                onFocusout: E,
                                maxlength: "160",
                                rows: "3",
                                onKeydown:
                                  a[5] ||
                                  (a[5] = (0, n.D2)(
                                    (0, n.iM)(() => {}, ["prevent"]),
                                    ["enter"]
                                  )),
                              },
                              null,
                              544
                            ),
                            [[n.nr, f.value]]
                          ),
                          (0, o._)("span", Ge, [
                            Xe,
                            (0, o._)(
                              "span",
                              Qe,
                              (0, u.zw)(f.value.length) + " / 160",
                              1
                            ),
                          ]),
                        ]),
                        (0, o._)("div", Ke, [
                          (0, o.wy)(
                            (0, o._)(
                              "input",
                              {
                                id: "locationInput",
                                type: "text",
                                "onUpdate:modelValue":
                                  a[6] || (a[6] = (e) => (w.value = e)),
                                onFocusin: E,
                                onFocusout: E,
                                maxlength: "30",
                              },
                              null,
                              544
                            ),
                            [[n.nr, w.value]]
                          ),
                          (0, o._)("span", et, [
                            tt,
                            (0, o._)(
                              "span",
                              at,
                              (0, u.zw)(w.value.length) + " / 30",
                              1
                            ),
                          ]),
                        ]),
                        (0, o._)("div", nt, [
                          (0, o._)(
                            "div",
                            {
                              class: "input-wrapper",
                              ref_key: "websiteInputWrapper",
                              ref: y,
                            },
                            [
                              (0, o.wy)(
                                (0, o._)(
                                  "input",
                                  {
                                    id: "websiteInput",
                                    type: "text",
                                    "onUpdate:modelValue":
                                      a[7] || (a[7] = (e) => (v.value = e)),
                                    onFocusin: E,
                                    onFocusout: E,
                                    maxlength: "50",
                                  },
                                  null,
                                  544
                                ),
                                [[n.nr, v.value]]
                              ),
                              (0, o._)("span", rt, [
                                st,
                                (0, o._)(
                                  "span",
                                  lt,
                                  (0, u.zw)(v.value.length) + " / 50",
                                  1
                                ),
                              ]),
                            ],
                            512
                          ),
                          (0, i.SU)(M)
                            ? ((0, o.wg)(),
                              (0, o.iD)("span", ot, "URL is not valid."))
                            : (0, o.kq)("", !0),
                        ]),
                        (0, o._)("div", it, [
                          ut,
                          (0, o._)("span", dt, [
                            (0, o._)(
                              "select",
                              {
                                id: "month",
                                name: "month",
                                ref_key: "monthInput",
                                ref: _,
                                onChange: j,
                              },
                              null,
                              544
                            ),
                            (0, o._)(
                              "select",
                              {
                                id: "day",
                                name: "day",
                                ref_key: "dayInput",
                                ref: b,
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
        const pt = (0, H.Z)(ct, [["__scopeId", "data-v-e5a19658"]]);
        var mt = pt,
          ft = a(4546),
          wt = a(7925);
        const vt = { class: "modal-header" },
          gt = { class: "header-item-wrapper" },
          ht = { class: "header-text" };
        var yt = {
          __name: "ModalUserList",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, wt.g)(),
              n = (0, c.U)(),
              r = (0, o.Fl)(() =>
                "retweet-list" === t.modalType
                  ? "Retweeted by"
                  : "like-list" === t.modalType
                  ? "Liked by"
                  : ""
              ),
              s = (0, o.Fl)(() => a.getTweet(t.routeTweetId)),
              l = (0, o.Fl)(() =>
                s.value && "retweet-list" === t.modalType
                  ? s.value.retweetsFrom.map((e) => n.getUser(e))
                  : "like-list" === t.modalType
                  ? s.value.likesFrom.map((e) => n.getUser(e))
                  : null
              );
            return (e, a) => {
              const n = (0, o.up)("v-icon");
              return (
                (0, o.wg)(),
                (0, o.iD)(
                  o.HY,
                  null,
                  [
                    (0, o._)("div", vt, [
                      (0, o._)("span", gt, [
                        (0, o._)(
                          "span",
                          {
                            class: "exit-modal-btn",
                            onClick:
                              a[0] ||
                              (a[0] = (...e) =>
                                (0, i.SU)(t).toggleModal &&
                                (0, i.SU)(t).toggleModal(...e)),
                          },
                          [
                            (0, o.Wm)(n, {
                              name: "bi-x",
                              scale: "1.6",
                              fill: "white",
                            }),
                          ]
                        ),
                        (0, o._)("span", ht, [
                          (0, o._)("strong", null, (0, u.zw)((0, i.SU)(r)), 1),
                        ]),
                      ]),
                    ]),
                    (0, i.SU)(l)
                      ? ((0, o.wg)(),
                        (0, o.j4)(
                          ft.Z,
                          { key: 0, users: (0, i.SU)(l) },
                          null,
                          8,
                          ["users"]
                        ))
                      : (0, o.kq)("", !0),
                  ],
                  64
                )
              );
            };
          },
        };
        const _t = yt;
        var bt = _t,
          Ut = a(5743),
          Tt = a.n(Ut),
          kt = a(1172);
        const xt = (e) => (
            (0, o.dD)("data-v-871482ce"), (e = e()), (0, o.Cn)(), e
          ),
          St = { class: "tweet-container" },
          Ft = { class: "tweet-body" },
          It = { class: "profile-pic-container" },
          Ct = xt(() => (0, o._)("div", { class: "gray-line" }, null, -1)),
          Mt = { class: "tweet-data" },
          Nt = { class: "user-info-and-btn" },
          Dt = { class: "user-info-wrapper" },
          qt = { class: "display-name" },
          Wt = { class: "username gray-text" },
          Et = xt(() =>
            (0, o._)("span", { class: "separator gray-text" }, "·", -1)
          ),
          Zt = { class: "tweet-time gray-text" },
          jt = { class: "tweet-content" };
        var At = {
          __name: "TweetCardSimple",
          props: { user: Object, tweet: Object },
          setup(e) {
            const t = e;
            var n = a(893);
            Tt().extend(n);
            let r = null;
            const s = (0, i.iH)(Tt()().toISOString()),
              l = (0, i.iH)(kt.Z.formatTweetDate(t.tweet.timestamp, s.value));
            return (
              (0, o.bv)(() => {
                Tt()(s.value).diff(Tt()(t.tweet.timestamp), "hour") > 23 ||
                  (r = setInterval(() => {
                    l.value !==
                      kt.Z.formatTweetDate(t.tweet.timestamp, s.value) &&
                      (l.value = kt.Z.formatTweetDate(
                        t.tweet.timestamp,
                        s.value
                      ));
                  }, 3e4));
              }),
              (0, o.Ah)(() => {
                clearInterval(r);
              }),
              (e, a) => (
                (0, o.wg)(),
                (0, o.iD)("div", St, [
                  (0, o._)("div", Ft, [
                    (0, o._)("div", It, [
                      (0, o.Wm)(
                        p.Z,
                        { url: t.user.avatarUrl, size: 48 },
                        null,
                        8,
                        ["url"]
                      ),
                      Ct,
                    ]),
                    (0, o._)("div", Mt, [
                      (0, o._)("div", Nt, [
                        (0, o._)("div", Dt, [
                          (0, o._)("span", qt, (0, u.zw)(t.user.name), 1),
                          (0, o._)(
                            "span",
                            Wt,
                            "@" + (0, u.zw)(t.user.username),
                            1
                          ),
                          Et,
                          (0, o._)("span", Zt, (0, u.zw)(l.value), 1),
                        ]),
                      ]),
                      (0, o._)("div", jt, [
                        (0, o._)(
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
        const Lt = (0, H.Z)(At, [["__scopeId", "data-v-871482ce"]]);
        var zt = Lt;
        const Rt = { class: "modal-header" },
          Ht = { class: "header-item-wrapper" };
        var Ot = {
          __name: "ModalComposeTweet",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, wt.g)(),
              n = (0, c.U)(),
              r = (0, o.Fl)(() => a.getTweet(t.modalReply.tweetId)),
              s = (0, o.Fl)(() => n.getUser(t.modalReply.userId));
            return (e, a) => {
              const n = (0, o.up)("v-icon");
              return (
                (0, o.wg)(),
                (0, o.iD)(
                  o.HY,
                  null,
                  [
                    (0, o._)("div", Rt, [
                      (0, o._)("span", Ht, [
                        (0, o._)(
                          "span",
                          {
                            class: "exit-modal-btn",
                            onClick:
                              a[0] ||
                              (a[0] = (...e) =>
                                (0, i.SU)(t).toggleModal &&
                                (0, i.SU)(t).toggleModal(...e)),
                          },
                          [
                            (0, o.Wm)(n, {
                              name: "bi-x",
                              scale: "1.6",
                              fill: "white",
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    "reply" === (0, i.SU)(t).modalType
                      ? ((0, o.wg)(),
                        (0, o.j4)(
                          zt,
                          { key: 0, user: (0, i.SU)(s), tweet: (0, i.SU)(r) },
                          null,
                          8,
                          ["user", "tweet"]
                        ))
                      : (0, o.kq)("", !0),
                    (0, o.Wm)(ce.Z, { isModal: !0 }),
                  ],
                  64
                )
              );
            };
          },
        };
        const Pt = Ot;
        var Yt = Pt;
        const Bt = { class: "modal-container" };
        var Vt = {
          __name: "ModalComponent",
          setup(e) {
            const t = (0, d.q)();
            return (e, a) => (
              (0, o.wg)(),
              (0, o.iD)(
                "div",
                {
                  class: "modal-overlay",
                  onClick:
                    a[0] ||
                    (a[0] = (0, n.iM)(
                      (e) => (0, i.SU)(t).toggleModal(),
                      ["stop", "self"]
                    )),
                },
                [
                  (0, o._)("div", Bt, [
                    "edit-profile" === (0, i.SU)(t).modalType
                      ? ((0, o.wg)(), (0, o.j4)(mt, { key: 0 }))
                      : (0, o.kq)("", !0),
                    "retweet-list" === (0, i.SU)(t).modalType ||
                    "like-list" === (0, i.SU)(t).modalType
                      ? ((0, o.wg)(), (0, o.j4)(bt, { key: 1 }))
                      : (0, o.kq)("", !0),
                    "status" === (0, i.SU)(t).modalType ||
                    "reply" === (0, i.SU)(t).modalType
                      ? ((0, o.wg)(), (0, o.j4)(Yt, { key: 2 }))
                      : (0, o.kq)("", !0),
                  ]),
                ]
              )
            );
          },
        };
        const $t = Vt;
        var Jt = $t;
        const Gt = { class: "toast" };
        var Xt = {
          __name: "ToastMessage",
          props: ["duration"],
          setup(e) {
            const t = e,
              a = (0, d.q)(),
              n = setTimeout(() => (a.showToast = !1), t.duration);
            return (
              (0, o.Ah)(() => {
                clearTimeout(n);
              }),
              (e, t) => (
                (0, o.wg)(),
                (0, o.iD)("div", Gt, (0, u.zw)((0, i.SU)(a).toastText), 1)
              )
            );
          },
        };
        const Qt = (0, H.Z)(Xt, [["__scopeId", "data-v-102f0dce"]]);
        var Kt = Qt;
        const ea = { class: "main-wrapper" },
          ta = { class: "timeline-wrapper" };
        var aa = {
          __name: "App",
          setup(e) {
            const t = (0, d.q)(),
              a = (0, c.U)();
            return (
              (0, o.bv)(() => {
                t.setCurrentUser(a.getUser("1"));
              }),
              (e, a) => {
                const r = (0, o.up)("router-view");
                return (
                  (0, o.wg)(),
                  (0, o.iD)(
                    o.HY,
                    null,
                    [
                      (0, o.Wm)(P),
                      (0, o._)("div", ea, [
                        (0, o._)("div", ta, [
                          (0, o.Wm)(de),
                          (0, o.Wm)(r, null, {
                            default: (0, o.w5)(({ Component: e }) => [
                              (0, o.Wm)(
                                n.uT,
                                { name: "fade", mode: "out-in" },
                                {
                                  default: (0, o.w5)(() => [
                                    ((0, o.wg)(),
                                    (0, o.j4)(
                                      o.n4,
                                      null,
                                      {
                                        default: (0, o.w5)(() => [
                                          ((0, o.wg)(),
                                          (0, o.j4)((0, o.LL)(e))),
                                        ]),
                                        fallback: (0, o.w5)(() => [
                                          (0, o.Wm)(ge),
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
                      (0, o.Wm)(ee),
                      ((0, o.wg)(),
                      (0, o.j4)(o.lR, { to: "body" }, [
                        (0, o.Wm)(n.uT, null, {
                          default: (0, o.w5)(() => [
                            (0, i.SU)(t).showModal
                              ? ((0, o.wg)(), (0, o.j4)(Jt, { key: 0 }))
                              : (0, o.kq)("", !0),
                          ]),
                          _: 1,
                        }),
                        (0, o.Wm)(n.uT, null, {
                          default: (0, o.w5)(() => [
                            (0, i.SU)(t).showToast
                              ? ((0, o.wg)(),
                                (0, o.j4)(Kt, { key: 0, duration: 1500 }))
                              : (0, o.kq)("", !0),
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
        const na = aa;
        var ra = na,
          sa = a(4463),
          la = a(1479),
          oa = a(9422),
          ia = a(6564),
          ua = a(9235),
          da = a(8422),
          ca = a(3e3),
          pa = a(2596),
          ma = a(1799),
          fa = a(7053),
          wa = a(3982);
        (0, sa.Go)(
          la.G4C,
          oa.MGj,
          oa.dpH,
          la.Ohp,
          ia.Lok,
          ia.R5Z,
          ua.J4e,
          da.m4n,
          ca.eoI,
          da.WbZ,
          ia.v0M,
          oa.HrR,
          la.JEI,
          ia.npH,
          ia.SW4,
          pa.ZcQ,
          pa.X81,
          ma.p1b,
          fa.EaH,
          ia.czh,
          ma.est,
          wa.BR5,
          ca.S5t,
          ia.opd,
          ma.P4y
        );
        const va = (0, r.WB)(),
          ga = (0, n.ri)(ra);
        ga.component("v-icon", sa.xt),
          ga.use(va, s.S),
          ga.use(l.Z).mount("#app");
      },
      1172: function (e, t, a) {
        var n = a(5743),
          r = a.n(n),
          s = a(893),
          l = a(976),
          o = a(1148),
          i = {
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
        r().extend(s, i),
          r().extend(l),
          r().extend(o),
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
          PH: function () {
            return s;
          },
          YM: function () {
            return l;
          },
          YN: function () {
            return o;
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
          s = new RegExp(/(@[a-zA-Z0-9_]{1,}[\s\S])/),
          l = (e) => {
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
          o = [
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
        var n = a(2483);
        const r = () =>
            Promise.all([a.e(386), a.e(456), a.e(16)]).then(a.bind(a, 5527)),
          s = () =>
            Promise.all([a.e(386), a.e(456), a.e(641)]).then(a.bind(a, 7067)),
          l = () => a.e(12).then(a.bind(a, 5012)),
          o = () => Promise.all([a.e(386), a.e(206)]).then(a.bind(a, 5774)),
          i = () => a.e(473).then(a.bind(a, 8473)),
          u = () => a.e(960).then(a.bind(a, 6960)),
          d = {
            template:
              '<div class="error gray-text" v-else>Tweet does not exist.</div>',
          },
          c = [
            { path: "", redirect: "/home" },
            { path: "/", redirect: "/home" },
            { path: "/chitter", redirect: "/home" },
            { path: "/home", name: "Home", component: r },
            { path: "/explore", name: "Explore", component: s },
            { path: "/notifications", name: "Notifications", component: l },
            { path: "/:username", name: "Profile", component: o, props: !0 },
            {
              path: "/:username/following",
              name: "Following",
              component: i,
              props: !0,
            },
            {
              path: "/:username/followers",
              name: "Followers",
              component: i,
              props: !0,
            },
            { path: "/status/:id", name: "Tweet", component: u, props: !0 },
            { path: "/:catchAll(.*)", component: d },
          ],
          p = (0, n.p7)({ history: (0, n.PO)(), routes: c });
        t["Z"] = p;
      },
      9327: function (e, t, a) {
        a.d(t, {
          q: function () {
            return s;
          },
        });
        a(7658);
        var n = a(2578),
          r = a(1120);
        const s = (0, n.Q_)("app", {
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
            routeName: () => r.Z.currentRoute.value.name,
            routeTweetId: () => r.Z.currentRoute.value.params.id,
            routeUsername: () => r.Z.currentRoute.value.params.username,
          },
          actions: {
            setCurrentUser(e) {
              (this.currentUser = e || null), (this.currentId = e.id);
            },
            setProfileTab(e) {
              if (this.profileTab === e) return;
              const t = ["tweets", "tweets-and-replies", "media", "likes"];
              if (!t.includes(e)) throw Error("wrong tab");
              this.profileTab = e;
            },
            setTweetContext(e) {
              window.getSelection().toString().length > 0 ||
                r.Z.push({ name: "Tweet", params: { id: e } });
            },
            viewUserProfile(e) {
              r.Z.push({ name: "Profile", params: { username: e } });
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
              ];
              if (!t.includes(e)) throw Error("wrong modal type");
              this.modalType = e;
            },
            setModalReply(e, t) {
              this.modalReply = { userId: e, tweetId: t };
            },
            toggleToast(e) {
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
        const o = new Date(),
          i = o.toISOString();
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
                timestamp: i,
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
                timestamp: i,
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
            addTweet(e = "status", t = "", a = [], n, s = null, l = null) {
              const o = new Date().toISOString(),
                i = {
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
                  quoting: null,
                  repliesFrom: [],
                  retweetsFrom: [],
                  quotesFrom: [],
                  likesFrom: [],
                };
              this.tweets.unshift(i),
                "reply" === e && s && this.getTweet(s).repliesFrom.push(i.id);
              const d = (0, r.U)(),
                c = a.length > 0;
              d.addTweet(n, i.id, e, c),
                d.addToLocalTimeline(n, i.id, e, o),
                d.addToAllFollowerTimelines(n, i.id, e, o),
                "reply" === e && l !== n && d.notify(l, n, "reply", i.id);
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
            return r;
          },
        });
        a(541), a(7658);
        var n = a(2578);
        const r = (0, n.Q_)("users", {
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
                authoredTweets: [
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
                  "https://pbs.twimg.com/profile_images/1573329090865778690/Nu2FIMbX_400x400.jpg",
                headerUrl:
                  "https://pbs.twimg.com/profile_banners/840764077681061889/1646410641/1500x500",
                followingCount: 1,
                followerCount: 0,
                tweetCount: 1,
                timestamp: "2020-02-03T23:12:08.000Z",
                authoredTweets: [{ id: "1", type: "reply", containsMedia: !0 }],
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
            updateProfile(e, t, a, n, r, s, l, o, i) {
              const u = this.users.filter((t) => t.id == e)[0],
                d = this.users.findIndex((t) => t.id == e);
              (u.name = t),
                (u.username = a),
                (u.description = n),
                (u.location = r),
                (u.website = s),
                (u.birthday = l),
                (u.avatarUrl = o),
                (u.headerUrl = i),
                Object.assign(this.users[d], u);
            },
            addTweet(e, t, a = "status", n = !1) {
              const r = this.getUser(e);
              r.authoredTweets.unshift({ id: t, type: a, containsMedia: n });
            },
            removeTweet(e, t) {
              const a = this.getUser(e),
                n = a.authoredTweets.findIndex((e) => e.id == t);
              a.authoredTweets.splice(n, 1);
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
      4546: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return C;
          },
        });
        var n = a(3396),
          r = a(9242),
          s = a(7139),
          l = a(4870),
          o = a(8341),
          i = a(8881),
          u = a(9327),
          d = a(988);
        const c = { class: "profile-pic-container" },
          p = { class: "user-body" },
          m = { class: "user-info-and-btn" },
          f = { class: "user-info-wrapper" },
          w = ["onClick"],
          v = { href: "#" },
          g = { class: "username-wrapper" },
          h = { class: "username gray-text" },
          y = { key: 0, class: "follows-you gray-text" },
          _ = { class: "description" };
        var b = {
            __name: "UserCard",
            props: ["id", "name", "username", "avatarUrl", "description"],
            setup(e) {
              const t = e,
                a = (0, u.q)(),
                b = (0, d.U)();
              function U() {
                a.viewUserProfile(t.username), a.showModal && a.toggleModal();
              }
              return (e, u) => (
                (0, n.wg)(),
                (0, n.iD)("div", { class: "user-container", onClick: U }, [
                  (0, n._)("div", c, [
                    (0, n.Wm)(
                      o.Z,
                      {
                        url: t.avatarUrl,
                        size: 48,
                        onClick: (0, r.iM)(U, ["stop"]),
                      },
                      null,
                      8,
                      ["url", "onClick"]
                    ),
                  ]),
                  (0, n._)("div", p, [
                    (0, n._)("div", m, [
                      (0, n._)("div", f, [
                        (0, n._)(
                          "span",
                          {
                            class: "display-name",
                            onClick: (0, r.iM)(U, ["stop"]),
                          },
                          [(0, n._)("a", v, (0, s.zw)(t.name), 1)],
                          8,
                          w
                        ),
                        (0, n._)("span", g, [
                          (0, n._)("span", h, " @" + (0, s.zw)(t.username), 1),
                          (0, l.SU)(b).isFollowingUser(
                            t.id,
                            (0, l.SU)(a).currentId
                          )
                            ? ((0, n.wg)(),
                              (0, n.iD)("div", y, " Follows you "))
                            : (0, n.kq)("", !0),
                        ]),
                      ]),
                      (0, n.Wm)(i.Z, { userId: t.id }, null, 8, ["userId"]),
                    ]),
                    (0, n._)("div", _, (0, s.zw)(t.description), 1),
                  ]),
                ])
              );
            },
          },
          U = a(89);
        const T = (0, U.Z)(b, [["__scopeId", "data-v-60a13baf"]]);
        var k = T;
        const x = { class: "user-list" },
          S = { key: 1, class: "error gray-text" };
        var F = {
          __name: "UserList",
          props: ["users"],
          setup(e) {
            return (t, a) => (
              (0, n.wg)(),
              (0, n.iD)("div", x, [
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
                                  k,
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
        const I = (0, U.Z)(F, [["__scopeId", "data-v-8d8fe586"]]);
        var C = I;
      },
      7427: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return I;
          },
        });
        a(7658);
        var n = a(3396),
          r = a(4870),
          s = a(9242),
          l = a(7139),
          o = a(8341),
          i = a(9327),
          u = a(7925),
          d = a(988),
          c = a(9707);
        const p = { class: "compose-tweet-container" },
          m = { class: "profile-pic-container" },
          f = { class: "compose-tweet-body" },
          w = { class: "compose-tweet-content" },
          v = ["src"],
          g = ["onClick"],
          h = { class: "compose-tweet-bar" },
          y = ["disabled"],
          _ = ["id", "disabled"],
          b = ["for"],
          U = { class: "limit-and-btn" },
          T = { class: "circle-wrapper" },
          k = ["disabled"];
        var x = {
            __name: "ComposeTweet",
            props: ["isModal"],
            setup(e) {
              const t = (0, i.q)(),
                a = (0, u.g)(),
                x = (0, d.U)(),
                S = (0, r.iH)(null),
                F = (0, r.iH)(null),
                I = (0, r.iH)([]),
                C = (0, r.iH)(""),
                M = (0, n.Fl)(() => t.currentUser),
                N = (0, n.Fl)(
                  () => 0 === C.value.length && 0 === I.value.length
                ),
                D = (0, n.Fl)(() => 4 === I.value.length),
                q = (0, n.Fl)(() => 280 - C.value.length),
                W = (0, n.Fl)(() => q.value <= 20),
                E = (0, n.Fl)(() => q.value <= 0),
                Z = (e) => {
                  I.value.push(URL.createObjectURL(e.currentTarget.files[0]));
                },
                j = (e) => {
                  I.value.splice(e, 1);
                },
                A = () => {
                  (S.value.style.height = ""),
                    (S.value.style.height = S.value.scrollHeight + "px");
                },
                L = () => {
                  A();
                },
                z = () => {
                  if (N.value) return;
                  let e = "reply" === t.modalType ? "reply" : "status",
                    n = "reply" === t.modalType ? t.modalReply.tweetId : null,
                    r = "reply" === t.modalType ? t.modalReply.userId : null,
                    s = C.value.split(" ")[0];
                  "status" === e &&
                    "@" === s[0] &&
                    x.getUserByUsername(s.replace("@", "")) &&
                    ((r = x.getUserByUsername(s.replace("@", "")).id),
                    (e = "reply")),
                    a.addTweet(e, C.value, I.value, M.value.id, n, r),
                    (C.value = ""),
                    (I.value = []),
                    t.showModal && t.toggleModal();
                };
              return (
                (0, n.YP)(C, () => {
                  const e = (C.value.length / 280).toFixed(2);
                  W.value && q.value > 0
                    ? (F.value.style = `--circle: ${e}; --color: #ffd400; --outerRadius: 28px; --innerRadius: 24px;`)
                    : E.value
                    ? (F.value.style = `--circle: ${e}; --color: #f4212e;--outerRadius: 28px; --innerRadius: 24px;`)
                    : (F.value.style = `--circle: ${e}; --color: #1d9bf0;--outerRadius: 22px; --innerRadius: 18px;`);
                }),
                (0, n.bv)(() => {}),
                (t, a) => {
                  const i = (0, n.up)("v-icon");
                  return (
                    (0, n.wg)(),
                    (0, n.iD)("div", p, [
                      (0, n._)("div", m, [
                        (0, n.Wm)(
                          o.Z,
                          { url: (0, r.SU)(M).avatarUrl, size: 48 },
                          null,
                          8,
                          ["url"]
                        ),
                      ]),
                      (0, n._)("div", f, [
                        (0, n._)("div", w, [
                          (0, n.wy)(
                            (0, n._)(
                              "textarea",
                              {
                                ref_key: "textArea",
                                ref: S,
                                placeholder: "What's happening?",
                                onInput: L,
                                "onUpdate:modelValue":
                                  a[0] || (a[0] = (e) => (C.value = e)),
                                maxlength: "280",
                              },
                              null,
                              544
                            ),
                            [[s.nr, C.value]]
                          ),
                          I.value.length > 0
                            ? ((0, n.wg)(),
                              (0, n.iD)(
                                "div",
                                {
                                  key: 0,
                                  class: (0, l.C_)([
                                    "tweet-media",
                                    [(0, r.SU)(c.YM)(I.value)],
                                  ]),
                                },
                                [
                                  ((0, n.wg)(!0),
                                  (0, n.iD)(
                                    n.HY,
                                    null,
                                    (0, n.Ko)(
                                      I.value,
                                      (e) => (
                                        (0, n.wg)(),
                                        (0, n.iD)(
                                          "div",
                                          {
                                            class: "image-preview-wrapper",
                                            key: I.value.indexOf(e),
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
                                              v
                                            ),
                                            (0, n._)(
                                              "button",
                                              {
                                                class: "remove-image-btn",
                                                onClick: (t) =>
                                                  j(I.value.indexOf(e)),
                                              },
                                              [
                                                (0, n.Wm)(i, {
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
                            { class: "add-image-btn", disabled: (0, r.SU)(D) },
                            [
                              (0, n._)(
                                "input",
                                {
                                  id:
                                    "upload-image-" +
                                    (e.isModal ? "modal" : ""),
                                  type: "file",
                                  accept: "image/png, image/gif, image/jpeg",
                                  onChange: Z,
                                  hidden: "",
                                  disabled: (0, r.SU)(D),
                                },
                                null,
                                40,
                                _
                              ),
                              (0, n._)(
                                "label",
                                {
                                  for:
                                    "upload-image-" +
                                    (e.isModal ? "modal" : ""),
                                },
                                [
                                  (0, n.Wm)(i, {
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
                          (0, n._)("div", U, [
                            (0, n._)("span", T, [
                              (0, n._)(
                                "div",
                                {
                                  ref_key: "circle",
                                  ref: F,
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
                                            { "red-text": (0, r.SU)(E) },
                                          ]),
                                        },
                                        (0, l.zw)((0, r.SU)(q)),
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
                                disabled: (0, r.SU)(E) || (0, r.SU)(N),
                                onClick: a[1] || (a[1] = (e) => z(null)),
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
          S = a(89);
        const F = (0, S.Z)(x, [["__scopeId", "data-v-ee8e3028"]]);
        var I = F;
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
          o = a(988),
          i = {
            __name: "FollowButton",
            props: ["userId"],
            setup(e) {
              const t = e,
                a = (0, l.q)(),
                i = (0, o.U)();
              return (e, l) =>
                (0, n.SU)(i).canUnfollow((0, n.SU)(a).currentUser, t.userId)
                  ? ((0, r.wg)(),
                    (0, r.iD)("button", {
                      key: 0,
                      class: "following-btn",
                      onClick:
                        l[0] ||
                        (l[0] = (0, s.iM)(
                          (e) =>
                            (0, n.SU)(i).unfollowUser(
                              (0, n.SU)(a).currentId,
                              t.userId
                            ),
                          ["stop"]
                        )),
                    }))
                  : (0, n.SU)(i).canFollow((0, n.SU)(a).currentUser, t.userId)
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
                              (0, n.SU)(i).followUser(
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
        const d = (0, u.Z)(i, [["__scopeId", "data-v-4b2dcf9a"]]);
        var c = d;
      },
      1319: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return i;
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
        const o = (0, l.Z)(s, [["__scopeId", "data-v-da93353a"]]);
        var i = o;
      },
      8341: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return i;
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
        const o = (0, l.Z)(s, [["__scopeId", "data-v-9e7d4a8e"]]);
        var i = o;
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
            for (var o = !0, i = 0; i < n.length; i++)
              (!1 & s || l >= s) &&
              Object.keys(a.O).every(function (e) {
                return a.O[e](n[i]);
              })
                ? n.splice(i--, 1)
                : ((o = !1), s < l && (l = s));
            if (o) {
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
            12: "2c8c9f16",
            16: "08cd2c83",
            206: "7c674864",
            386: "2d88f60c",
            456: "b9b8675a",
            473: "b264834f",
            641: "b5b56ce8",
            960: "2bb952fe",
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
            12: "86ce9e15",
            16: "8ee97061",
            206: "c6d099a0",
            473: "9e4d3db9",
            641: "8ee97061",
            960: "29a1e372",
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
          var o, i;
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
                o = c;
                break;
              }
            }
          o ||
            ((i = !0),
            (o = document.createElement("script")),
            (o.charset = "utf-8"),
            (o.timeout = 120),
            a.nc && o.setAttribute("nonce", a.nc),
            o.setAttribute("data-webpack", t + s),
            (o.src = n)),
            (e[n] = [r]);
          var p = function (t, a) {
              (o.onerror = o.onload = null), clearTimeout(m);
              var r = e[n];
              if (
                (delete e[n],
                o.parentNode && o.parentNode.removeChild(o),
                r &&
                  r.forEach(function (e) {
                    return e(a);
                  }),
                t)
              )
                return t(a);
            },
            m = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = p.bind(null, o.onerror)),
            (o.onload = p.bind(null, o.onload)),
            i && document.head.appendChild(o);
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
                o = (s && s.target && s.target.href) || t,
                i = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + o + ")"
                );
              (i.code = "CSS_CHUNK_LOAD_FAILED"),
                (i.type = l),
                (i.request = o),
                r.parentNode.removeChild(r),
                n(i);
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
              o = a.p + l;
            if (t(l, o)) return r();
            e(n, o, r, s);
          });
        },
        r = { 143: 0 };
      a.f.miniCss = function (e, t) {
        var a = { 12: 1, 16: 1, 206: 1, 473: 1, 641: 1, 960: 1 };
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
              o = new Error(),
              i = function (n) {
                if (a.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    l = n && n.target && n.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + s + ": " + l + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = s),
                    (o.request = l),
                    r[1](o);
                }
              };
            a.l(l, i, "chunk-" + t, t);
          }
      }),
        (a.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, n) {
          var r,
            s,
            l = n[0],
            o = n[1],
            i = n[2],
            u = 0;
          if (
            l.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in o) a.o(o, r) && (a.m[r] = o[r]);
            if (i) var d = i(a);
          }
          for (t && t(n); u < l.length; u++)
            (s = l[u]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return a.O(d);
        },
        n = (self["webpackChunkchitter"] = self["webpackChunkchitter"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = a.O(void 0, [998], function () {
    return a(3657);
  });
  n = a.O(n);
})();
//# sourceMappingURL=app.62e180f4.js.map
