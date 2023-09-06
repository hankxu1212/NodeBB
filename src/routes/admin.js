"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const connect_multiparty_1 = __importDefault(require("connect-multiparty"));
const helpers_1 = __importDefault(require("./helpers"));
// The function takes middlewares and controllers, neither of which have been translated yet.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function apiRoutes(router, name, middleware, controllers) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.get(`/api/${name}/users/csv`, middleware.ensureLoggedIn, helpers_1.default.tryRoute(controllers.admin.users.getCSV));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.get(`/api/${name}/groups/:groupname/csv`, middleware.ensureLoggedIn, helpers_1.default.tryRoute(controllers.admin.groups.getCSV));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.get(`/api/${name}/analytics`, middleware.ensureLoggedIn, helpers_1.default.tryRoute(controllers.admin.dashboard.getAnalytics));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.get(`/api/${name}/advanced/cache/dump`, middleware.ensureLoggedIn, helpers_1.default.tryRoute(controllers.admin.cache.dump));
    // the following creates a middleware, which has not been translated yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const multiParty = new connect_multiparty_1.default();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    const middlewares = [multiParty, middleware.validateFiles, middleware.applyCSRF, middleware.ensureLoggedIn];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/category/uploadpicture`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadCategoryPicture));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/uploadfavicon`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadFavicon));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/uploadTouchIcon`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadTouchIcon));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/uploadMaskableIcon`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadMaskableIcon));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/uploadlogo`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadLogo));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/uploadOgImage`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadOgImage));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/upload/file`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadFile));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    router.post(`/api/${name}/uploadDefaultAvatar`, middlewares, helpers_1.default.tryRoute(controllers.admin.uploads.uploadDefaultAvatar));
}
module.exports = function (app, name, middleware, controllers) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    const middlewares = [middleware.pluginHooks];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}`, middlewares, controllers.admin.routeIndex);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/dashboard`, middlewares, controllers.admin.dashboard.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/dashboard/logins`, middlewares, controllers.admin.dashboard.getLogins);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/dashboard/users`, middlewares, controllers.admin.dashboard.getUsers);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/dashboard/topics`, middlewares, controllers.admin.dashboard.getTopics);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/dashboard/searches`, middlewares, controllers.admin.dashboard.getSearches);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/categories`, middlewares, controllers.admin.categories.getAll);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/categories/:category_id`, middlewares, controllers.admin.categories.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/categories/:category_id/analytics`, middlewares, controllers.admin.categories.getAnalytics);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/privileges/:cid?`, middlewares, controllers.admin.privileges.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/tags`, middlewares, controllers.admin.tags.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/users`, middlewares, controllers.admin.users.index);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/registration`, middlewares, controllers.admin.users.registrationQueue);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/admins-mods`, middlewares, controllers.admin.adminsMods.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/groups`, middlewares, controllers.admin.groups.list);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/groups/:name`, middlewares, controllers.admin.groups.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/uploads`, middlewares, controllers.admin.uploads.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/manage/digest`, middlewares, controllers.admin.digest.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/email`, middlewares, controllers.admin.settings.email);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/user`, middlewares, controllers.admin.settings.user);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/post`, middlewares, controllers.admin.settings.post);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/advanced`, middlewares, controllers.admin.settings.advanced);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/languages`, middlewares, controllers.admin.settings.languages);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/navigation`, middlewares, controllers.admin.settings.navigation);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/homepage`, middlewares, controllers.admin.settings.homepage);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/social`, middlewares, controllers.admin.settings.social);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/settings/:term?`, middlewares, controllers.admin.settings.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/appearance/:term?`, middlewares, controllers.admin.appearance.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/extend/plugins`, middlewares, controllers.admin.plugins.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/extend/widgets`, middlewares, controllers.admin.extend.widgets.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/extend/rewards`, middlewares, controllers.admin.extend.rewards.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/advanced/database`, middlewares, controllers.admin.database.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/advanced/events`, middlewares, controllers.admin.events.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/advanced/hooks`, middlewares, controllers.admin.hooks.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/advanced/logs`, middlewares, controllers.admin.logs.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/advanced/errors`, middlewares, controllers.admin.errors.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/advanced/errors/export`, middlewares, controllers.admin.errors.export);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/advanced/cache`, middlewares, controllers.admin.cache.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/development/logger`, middlewares, controllers.admin.logger.get);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    helpers_1.default.setupAdminPageRoute(app, `/${name}/development/info`, middlewares, controllers.admin.info.get);
    apiRoutes(app, name, middleware, controllers);
};
