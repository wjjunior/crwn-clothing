import reducer from "./user.reducer";
import { setCurrentUser } from "./user.actions";
describe("Should test user reducer", () => {
  const initialState = {
    currentUser: "UserTest"
  };

  it("should insert a user", () => {
    const setUserAction = setCurrentUser("UserTest");
    expect(reducer(initialState, setUserAction)).toBeDefined();
  });
});
