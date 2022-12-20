import "react-native-gesture-handler/jestSetup";
//import { __esModule } from "react-native-gesture-handler/lib/commonjs/mocks";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock(
  "../node_modules/react-native/Libraries/Core/NativeExceptionsManager",
  () => ({
    __esModule: true,
    default: {
      reportException: jest.fn(),
    },
  })
);
jest.mock("react-native/Libraries/LogBox/Data/LogBoxData");
