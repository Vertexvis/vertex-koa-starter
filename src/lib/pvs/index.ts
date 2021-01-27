import { SceneItem } from "./index.d";
import { processPvs } from "./pvs";

export class PvsMonitor {
  public async getJson(): Promise<SceneItem[]> {
    return processPvs(
      `<?xml version="1.0"?>
<PV_FILE type="PVS" version="0301">
<section_index>
  <internal_section type="2"/>
  <internal_section type="3"/>
</section_index>
<section_structure>
  <component name="PN0, Operator's Manual"/>
  <component name="PN0, Washer">
    <shape_source file_name="PN0.ol" bbox="-0.0185,-0.003,-0.0185,0.0185,0,0.0185"/>
  </component>
  <component name="PN1, Bolt">
    <shape_source file_name="PN1.ol" bbox="-0.07,-0.2,-0.025,0.07,0.2,0.059999999"/>
  </component>
  <component name="TN0, Operator's Manual">
    <component_instance index="0" id="0:58e4f9e5-ce2d-4608-afc5-efa643a4883c" hide_self="true" hide_child="true"/>
  </component>
  <component name="TN1, Model">
    <component_instance index="2" translation="0,0,0.045" orientation="1,0,0,0,0,-1,0,1,0" id="104"/>
    <component_instance index="1" translation="0,1.799372463566829e-029,0.03" id="107"/>
  </component>
  <component name="TN1, Model">
    <component_instance index="4" translation="0,0,0.045" orientation="1,0,0,0,0,-1,0,1,0" id="109"/>
    <component_instance index="3" id="102" hide_child="true"/>
    <component_instance index="1" translation="0,1.799372463566829e-029,0.03" id="107"/>
  </component>
</section_structure>
<section_properties>
  <property_component_ref>
    <property name="revId" value="A"/>
  </property_component_ref>
  <property_component_ref>
    <property name="revId" value="A.1"/>
  </property_component_ref>
  <property_component_ref>
    <property name="revId" value="B"/>
  </property_component_ref>
  <property_component_ref>
    <property name="revId" value="--.12"/>
  </property_component_ref>
  <property_component_ref>
    <property name="revId" value="A.2"/>
  </property_component_ref>
</section_properties>
</PV_FILE>
`,
      true
    );
  }
}
