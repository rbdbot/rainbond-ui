import {
  queryNotices,
  isPubCloud,
  getRainbondInfo,
  bindGithub,
  syncMarketApp,
  getMarketApp,
  syncMarketAppDetail,
  authEnterprise,
  getCompanyInfo,
  getRegionOneDayMoney,
  getRegionSource,
  offlineMarketApp,
  getuserMessage,
  putMsgAction,
  deleteMsg,
  getMarketPlugins,
  syncMarketPlugins,
  syncMarketPluginTmp,
  complatePluginShare,
  getCloudPlugin,
  syncCloudPlugin,
  deleteMarketPlugin,
  getAllRegion,
  InitTeam,
  resPrice,
  buyPurchase,
  getPayHistory,
  getAllRegionFee,
  getAllTeams,
  joinTeam,
  getJoinTeam,
  deleteJoinTeam,
  setRegist,
  getRegist,
  getEnterpriseInfo,
  getEnterpriseTeams,
  queryAuthority,
  toCreatUser,
  toBuildShape,
  toQueryTopology,
  toQueryLinks,
  getVersion,
  toSearchTenant
} from "../services/api";
import { getTeamRegionGroups } from "../services/team";

export default {
  namespace: "global",

  state: {
    collapsed: false,
    notices: [],
    // 是否是有公有云
    isPubCloud: null,
    // 当前团队和数据中心的群组
    groups: null,
    currTeam: "",
    currRegion: "",
    // 云帮平台信息
    rainbondInfo: null,
    apploadingnum: 0,
    // 显示充值提示
    payTip: false,
    noMoneyTip: false,
    showAuthCompany: false,
    // enterprise info
    enterprise: null,
    isRegist: false,
    memoryTip: ''
  },

  effects: {
    * getAllTeams({ payload, callback }, { call, put }) {
      const data = yield call(getAllTeams, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * joinTeam({ payload, callback }, { call, put }) {
      const data = yield call(joinTeam, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getJoinTeams({ payload, callback }, { call, put }) {
      const data = yield call(getJoinTeam, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * deleteJoinTeams({ payload, callback }, { call, put }) {
      const data = yield call(deleteJoinTeam, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getAllRegionFee({ payload, callback }, { call, put }) {
      const data = yield call(getAllRegionFee, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getPayHistory({ payload, callback }, { call, put }) {
      const data = yield call(getPayHistory, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * deleteMarketPlugin({ payload, callback }, { call, put }) {
      const data = yield call(deleteMarketPlugin, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * InitTeam({ payload, callback }, { call, put }) {
      const data = yield call(InitTeam, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * syncCloudPlugin({ payload, callback }, { call, put }) {
      const data = yield call(syncCloudPlugin, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getVersion({ payload, callback }, { call, put }) {
      const data = yield call(getVersion, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getCloudPlugin({ payload, callback }, { call, put }) {
      const data = yield call(getCloudPlugin, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * complatePluginShare({ payload, callback }, { call, put }) {
      const data = yield call(complatePluginShare, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getMarketPlugins({ payload, callback }, { call, put }) {
      const data = yield call(getMarketPlugins, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * syncMarketPlugins({ payload, callback }, { call, put }) {
      const data = yield call(syncMarketPlugins, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * syncMarketPluginTmp({ payload, callback }, { call, put }) {
      const data = yield call(syncMarketPluginTmp, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getAllRegion({ payload, callback }, { call, put }) {
      const data = yield call(getAllRegion, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * offlineMarketApp({ payload, callback }, { call, put }) {
      const data = yield call(offlineMarketApp, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getRegionSource({ payload, callback }, { call, put }) {
      const data = yield call(getRegionSource, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getRegionOneDayMoney({ payload, callback }, { call, put }) {
      const data = yield call(getRegionOneDayMoney, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getuserMessage({ payload, callback }, { call, put }) {
      const data = yield call(getuserMessage, payload);
      if (data && callback) {
        callback(data);
      }
    },
    // 消息标记为已读未读
    * putMsgAction({ payload, callback }, { call, put }) {
      const data = yield call(putMsgAction, payload);
      if (data && callback) {
        callback(data);
      }
    },
    // 删除站内信
    * deleteMsg({ payload, callback }, { call, put }) {
      const data = yield call(deleteMsg, payload);
      if (data && callback) {
        callback(data);
      }
    },
    // 资源价格计算
    * resPrice({ payload, callback }, { call, put }) {
      const data = yield call(resPrice, payload);
      if (data && callback) {
        callback(data);
      }
    },
    // 资源购买
    * buyPurchase({ payload, callback }, { call, put }) {
      const data = yield call(buyPurchase, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getCompanyInfo({ payload, callback }, { call, put }) {
      const data = yield call(getCompanyInfo, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * authEnterprise({ payload, callback }, { call, put }) {
      const data = yield call(authEnterprise, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * syncMarketAppDetail({ payload, callback }, { call, put }) {
      const data = yield call(syncMarketAppDetail, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * getMarketApp({ payload, callback }, { call, put }) {
      const data = yield call(getMarketApp, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * syncMarketApp({ payload, callback }, { call, put }) {
      const data = yield call(syncMarketApp, payload);
      if (data && callback) {
        callback(data);
      }
    },
    * fetchRainbondInfo({ callback }, { call, put }) {
      const data = yield call(getRainbondInfo);
      if (data) {
        yield put({ type: "saveRainBondInfo", payload: data.bean });
        setTimeout(() => {
          callback && callback(data.bean);
        });
      }
    },
    * fetchIsPublic(_, { call, put }) {
      const data = yield call(isPubCloud);
      yield put({
        type: "saveIsPubCloud",
        payload: !!data.bean.is_public,
      });
    },
    * fetchNotices(_, { call, put }) {
      const data = yield call(queryNotices);
      yield put({ type: "saveNotices", payload: data });
      yield put({ type: "user/changeNotifyCount", payload: data.length });
    },
    * clearNotices({ payload }, { put, select }) {
      yield put({ type: "saveClearedNotices", payload });
      const count = yield select(state => state.global.notices.length);
      yield put({ type: "user/changeNotifyCount", payload: count });
    },
    * fetchGroups({ payload, callback }, { put, call }) {
      const response = yield call(getTeamRegionGroups, payload);
      if (response) {
        setTimeout(() => {
          callback && callback(response.list);
        });
        yield put({
          type: "saveGroups",
          payload: response.list || [],
        });
      }
    },
    * bindGithub({ payload, callback }, { put, call }) {
      const response = yield call(bindGithub, payload);
      if (response) {
        callback && callback();
      }
    },
    * putIsRegist({ payload, callback }, { put, call }) {
      const response = yield call(setRegist, payload);
      if (response) {
        callback && callback();
        yield put({
          type: "saveIsRegist",
          payload: payload.isRegist,
        });
      }
    },
    * getIsRegist({ payload, callback }, { put, call }) {
      const response = yield call(getRegist, payload);
      if (response) {
        callback && callback();
        yield put({
          type: "saveIsRegist",
          payload: response.bean.is_regist,
        });
      }
    },
    * getEnterpriseInfo({ payload, callback }, { put, call }) {
      const response = yield call(getEnterpriseInfo, payload);
      if (response) {
        callback && callback();
        yield put({
          type: "saveEnterpriseInfo",
          payload: response.bean,
        });
      }
    },
    * getEnterpriseTeams({ payload, callback }, { put, call }) {
      const response = yield call(getEnterpriseTeams, payload);
      if (response) {
        callback && callback(response);
      }
    },
    * requestAuthority({ callback, payload}, { call }) {
      const response = yield call(queryAuthority,payload);
      if ( callback) {
        callback(response);
      }
    },
    *creatUser({payload,callback},{call}){
      const response = yield call(toCreatUser,payload);
      if ( callback) {
        callback(response);
      }
    },
    *buildShape({payload,callback},{call}){
      const response = yield call(toBuildShape,payload);
      if ( callback) {
        callback(response);
      }
    },
    *fetAllTopology({payload,callback},{call}){
      const response = yield call(toQueryTopology,payload);
      if ( callback) {
        callback(response);
      }
    },
    *queryLinks({payload,callback},{call}){
      const response = yield call(toQueryLinks,payload);
      if ( callback) {
        callback(response);
      }
    },
    *searchTenant({payload,callback},{call}){
      const response = yield call(toSearchTenant,payload);
      if ( callback) {
        callback(response);
      }
    }
  },

  reducers: {
    showPayTip(state) {
      return {
        ...state,
        payTip: true,
      };
    },
    showMemoryTip(state,action){
      console.log(action)
      return {
        ...state,
        memoryTip: action.payload.message,
      };
    },
    hideMemoryTip(state,action){
      return {
        ...state,
        memoryTip: '',
      };
    },
    showNoMoneyTip(state) {
      return {
        ...state,
        noMoneyTip: true,
      };
    },
    hideNoMoneyTip(state) {
      return {
        ...state,
        noMoneyTip: false,
      };
    },
    hidePayTip(state) {
      return {
        ...state,
        payTip: false,
      };
    },
    saveRainBondInfo(state, { payload }) {
      return {
        ...state,
        rainbondInfo: payload,
        isRegist: payload.is_regist,
      };
    },
    saveIsPubCloud(state, { payload }) {
      return {
        ...state,
        isPubCloud: payload,
      };
    },
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
    saveGroups(state, { payload }) {
      return {
        ...state,
        groups: payload,
      };
    },
    saveCurrTeamAndRegion(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    showLoading(state, { }) {
      return {
        ...state,
        apploadingnum: state.apploadingnum + 1,
      };
    },
    hiddenLoading(state, { }) {
      return {
        ...state,
        apploadingnum: state.apploadingnum - 1,
      };
    },
    showAuthCompany(state, { }) {
      return {
        ...state,
        showAuthCompany: true,
      };
    },
    hideAuthCompany(state, { }) {
      return {
        ...state,
        showAuthCompany: false,
      };
    },
    saveIsRegist(state, { payload }) {
      return {
        ...state,
        isRegist: payload,
      };
    },
    saveEnterpriseInfo(state, { payload }) {
      return {
        ...state,
        enterprise: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== "undefined") {
          window.ga("send", "pageview", pathname + search);
        }
      });
    },
  },
};
