import { types } from "../../types/types";

describe("test Types", () => {
  test("should have all types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",
      notesAddNew: "[Notes] New note",
      notesActive: "[Notes] Set Active note",
      notesLoad: "[Notes] Load notes",
      noteUpdated: "[Notes] Updated note",
      notesFileUrl: "[Notes] Updated image url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    });
  });
});
