import * as React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import { AdaptivityProvider, View, Panel } from "@vkontakte/vkui";

import CustomSelect from "@vkontakte/vkui/dist/components/CustomSelect/CustomSelect";
import { CustomSelectProps } from "@vkontakte/vkui/dist/components/CustomSelect/CustomSelect";

interface MyCustomSelectProps extends CustomSelectProps {
  extraProperty: string;
}

export const MyCustomSelect = ({
  extraProperty,
  ...props
}: MyCustomSelectProps) => {
  return <CustomSelect {...props} />;
};

export default function App() {
  return (
    <AdaptivityProvider>
      <View activePanel="panel1">
        <Panel id="panel1">
          <MyCustomSelect extraProperty="test" options={[]} />
        </Panel>
      </View>
    </AdaptivityProvider>
  );
}
