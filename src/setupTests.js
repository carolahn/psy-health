import "@testing-library/jest-dom/extend-expect";

import Enzyme from "./containers/search-filter/__tests__/node_modules/enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
