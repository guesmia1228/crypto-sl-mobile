import Register from "./pages/register";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Home from "./pages/home";
import Loading from "./pages/loading";
import Secure from "./pages/secure";
import Send from "./pages/send";
import ScanQR from "./pages/scanQR";
import EnterAmount from "./pages/enterAmount";
import Report from "./pages/report";
import Receive from "./pages/receive";
import Navigation from "./components/navigation/navigation";
import Transactions from "./pages/transactions";
import Exchange from "./pages/exchange";
import Payroll from "./pages/payroll";
import Employee from "./pages/employee";
import AddEmployee from "./pages/addEmployee";
import Payment from "./pages/payment";
import Admin from "./pages/admin";
import Diamond from "./pages/diamond";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gold from "./pages/gold";
import Counter from "./pages/counter";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Secure" component={Secure} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="ScanQR" component={ScanQR} />
        <Stack.Screen name="EnterAmount" component={EnterAmount} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Receive" component={Receive} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="Exchange" component={Exchange} />
        <Stack.Screen name="Payroll" component={Payroll} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Gold" component={Gold} />
        <Stack.Screen name="Diamond" component={Diamond} />
      </Stack.Navigator> */}

      <Counter />
    </NavigationContainer>
  );
}
