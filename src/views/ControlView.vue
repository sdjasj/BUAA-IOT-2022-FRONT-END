<template>
  <v-container
    fluid
  >
    <v-row
      align="stretch"
      justify="start"
    >
      <v-col :cols="12" md="2" sm="12">
        <template v-for="(boardState, i) in boardStates">
          <v-card :key="i" class="mt-8 mb-8 left-bg">
            <v-list-item two-line >
              <v-list-item-avatar
                                  :class="boardState.baseClass"
                                  @click="boardState.gotoLink()">
                <v-img
                  :class="boardState.colorClass"
                  :id="boardState.imgId">
                </v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-subtitle>{{boardState.name}}</v-list-item-subtitle>
                <v-list-item-title style="font-weight: 600;">{{boardState.value}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
      <v-col :cols="12" md="10" sm="12">
        <v-card ref="form" class="mt-8" style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-card-title style="justify-content: center; font-size: x-large; font-weight: bold">
            设备情况
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" sm="12">
                <v-row>

                  <v-card-title style="padding-bottom: 0px;">
                    温度阈值
                  </v-card-title>
                </v-row>
                <v-row v-if="!mobileFlag">
                  <v-tabs
                    color="deep-purple accent-4"
                    background-color="transparent"
                  >
                    <v-tab>报警高温阈值</v-tab>
                    <v-tab>报警低温阈值</v-tab>
                    <v-tab>预警高温阈值</v-tab>
                    <v-tab>预警低温阈值</v-tab>

                    <!-- 报警高温阈值 -->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="highTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(1)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
<!--                    报警低温阈值-->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="lowTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(2)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
<!--                    预警高温阈值-->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="preHighTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(3)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
<!--                    预警低温阈值-->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="preLowTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(4)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                  </v-tabs>
                </v-row>
                <v-row v-else>
                  <v-tabs
                    color="deep-purple accent-4"
                    show-arrows
                    background-color="transparent"
                  >
                    <v-tab>报警高温阈值</v-tab>
                    <v-tab>报警低温阈值</v-tab>
                    <v-tab>预警高温阈值</v-tab>
                    <v-tab>预警低温阈值</v-tab>

                    <!-- 报警高温阈值 -->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="highTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(1)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="lowTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(2)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="preHighTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(3)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(247,254,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="preLowTemperatureThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlT(4)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                  </v-tabs>
                </v-row>








                <v-row>
                  <v-card-title style="padding-bottom: 0px;">
                    湿度阈值
                  </v-card-title>
                </v-row>
                <v-row v-if="!mobileFlag">
                  <v-tabs
                    color="deep-purple accent-4"
                    background-color="transparent"
                  >
                    <v-tab>报警高湿度阈值</v-tab>
                    <v-tab>报警低湿度阈值</v-tab>
                    <v-tab>预警高湿度阈值</v-tab>
                    <v-tab>预警低湿度阈值</v-tab>

                    <!-- 报警高温阈值 -->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="highHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(1)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="lowHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(2)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="preHighHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(3)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="preLowHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(4)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                  </v-tabs>
                </v-row>
                <v-row v-else>
                  <v-tabs
                    color="deep-purple accent-4"
                    show-arrows
                    background-color="transparent"
                  >
                    <v-tab>报警高湿度阈值</v-tab>
                    <v-tab>报警低湿度阈值</v-tab>
                    <v-tab>预警高湿度阈值</v-tab>
                    <v-tab>预警低湿度阈值</v-tab>

                    <!-- 报警高温阈值 -->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="highHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(1)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="lowHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(2)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="preHighHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(3)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(244,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="preLowHumidityThreshold"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlH(4)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                  </v-tabs>
                </v-row>



                <v-row>
                  <v-card-title style="padding-bottom: 0px;">
                    监测周期
                  </v-card-title>
                </v-row>
                <v-row v-if="!mobileFlag">
                  <v-tabs
                    color="deep-purple accent-4"
                    background-color="transparent"
                  >
                    <v-tab>温度监测周期</v-tab>
                    <v-tab>湿度监测周期</v-tab>

                    <!-- 报警高温阈值 -->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(237,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="Tcycle"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlCycle(1)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(237,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                          >
                            <v-text-field
                              :value="Hcycle"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlCycle(2)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                  </v-tabs>
                </v-row>
                <v-row v-else>
                  <v-tabs
                    color="deep-purple accent-4"
                    show-arrows
                    background-color="transparent"
                  >
                    <v-tab>温度监测周期</v-tab>
                    <v-tab>湿度监测周期</v-tab>

                    <!-- 报警高温阈值 -->
                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(237,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="Tcycle"
                              outlined
                              readonly
                              prepend-icon="mdi-temperature-celsius"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlCycle(1)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                    <v-tab-item
                    >
                      <v-container fluid style="background-color: rgb(237,255,255)">
                        <v-row>
                          <v-col
                            cols="12"
                            md="8"
                            sm="12"
                            class="pb-0"
                          >
                            <v-text-field
                              :value="Hcycle"
                              outlined
                              readonly
                              prepend-icon="mdi-water"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4" sm="12" class="pt-0">
                            <v-btn
                              outlined
                              color="success"
                              class="mt-2"
                              block
                              @click="openControlCycle(2)"
                            >
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                              Edit
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-tab-item>
                  </v-tabs>
                </v-row>

                <v-row>
                  <v-card-title style="padding-bottom: 0px;">
                    监测模式
                  </v-card-title>
                </v-row>
                <v-row v-if="!mobileFlag">
                  <v-col
                    cols="12"
                    md="8"
                    sm="12"
                  >
                    <v-select
                      v-model="selectedMode"
                      :items="modes"
                      chips
                      label="监测模式"
                      multiple
                      outlined
                      prepend-icon="mdi-state-machine"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4" sm="12">
                    <v-btn
                      outlined
                      color="success"
                      class="mt-2"
                      block
                      @click="changeMode"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                      Edit
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row v-else>

                </v-row>


                <v-row>
                  <v-card-title style="padding-bottom: 0px;">
                    当前设备
                  </v-card-title>
                </v-row>
                <v-row v-if="!mobileFlag">
                  <v-col
                    cols="12"
                    md="8"
                    sm="12"
                  >
                    <v-text-field
                      :value="deviceId"
                      outlined
                      readonly
                      prepend-icon="mdi-devices"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="12">
                    <v-btn
                      outlined
                      color="success"
                      class="mt-2"
                      block
                      @click="deviceBindDialog = true"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                      Edit
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row v-else>
                  <v-col
                    cols="12"
                    md="8"
                    sm="12"
                    class="pb-0"
                  >
                    <v-text-field
                      :value="deviceId"
                      outlined
                      readonly
                      prepend-icon="mdi-devices"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="12" class="pt-0">
                    <v-btn
                      outlined
                      color="success"
                      class="mt-2"
                      block
                      @click="deviceBindDialog = true"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                      Edit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6" sm="12" style="text-align: center">
                <v-card-title>
                  历史数据
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    class="pt-0"
                  ></v-text-field>
                  <v-btn
                    outlined
                    color="indigo"
                    class="ma-2"
                    @click="loadHistoryData"
                  >
                    <v-icon>
                      mdi-plus-circle
                    </v-icon>
                    加载数据
                  </v-btn>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                ></v-data-table>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mt-6"></v-divider>
        </v-card>
      </v-col>
    </v-row>

<!--    温度阈值控制-->
    <v-dialog
      v-model="controlT"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5" v-if="typeT === 1">修改报警高温阈值</span>
          <span class="text-h5" v-else-if="typeT === 2">修改报警低温阈值</span>
          <span class="text-h5" v-else-if="typeT === 3">修改预警高温阈值</span>
          <span class="text-h5" v-else-if="typeT === 4">修改预警低温阈值</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newT"
                  label="新报警高温阈值"
                  v-if="typeT === 1"
                ></v-text-field>
                <v-text-field
                  v-model="newT"
                  label="新报警低温阈值"
                  v-else-if="typeT === 2"
                ></v-text-field>
                <v-text-field
                  v-model="newT"
                  label="新预警高温阈值"
                  v-else-if="typeT === 3"
                ></v-text-field>
                <v-text-field
                  v-model="newT"
                  label="新预警低温阈值"
                  v-else-if="typeT === 4"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="cancelControlT"
          >
            关闭
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addNewControlT"
          >
            提交
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



    <!--    湿度阈值控制-->
    <v-dialog
      v-model="controlH"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5" v-if="typeH === 1">修改报警高湿度阈值</span>
          <span class="text-h5" v-else-if="typeH === 2">修改报警低湿度阈值</span>
          <span class="text-h5" v-else-if="typeH === 3">修改预警高湿度阈值</span>
          <span class="text-h5" v-else-if="typeH === 4">修改预警低湿度阈值</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newH"
                  label="新报警高湿度阈值"
                  v-if="typeH === 1"
                ></v-text-field>
                <v-text-field
                  v-model="newH"
                  label="新报警低湿度阈值"
                  v-else-if="typeH === 2"
                ></v-text-field>
                <v-text-field
                  v-model="newH"
                  label="新预警高湿度阈值"
                  v-else-if="typeH === 3"
                ></v-text-field>
                <v-text-field
                  v-model="newH"
                  label="新预警低湿度阈值"
                  v-else-if="typeH === 4"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="cancelControlH"
          >
            关闭
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addNewControlH"
          >
            提交
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--    周期控制-->
    <v-dialog
      v-model="controlCycle"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5" v-if="typeC === 1">修改温度监测周期</span>
          <span class="text-h5" v-else-if="typeC === 2">修改湿度度监测周期</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newCycle"
                  label="新温度监测周期"
                  v-if="typeC === 1"
                ></v-text-field>
                <v-text-field
                  v-model="newCycle"
                  label="新温度监测周期"
                  v-else-if="typeC === 2"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="cancelControlCycle"
          >
            关闭
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addNewCycle"
          >
            提交
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--    设备绑定-->
    <v-dialog
      v-model="deviceBindDialog"
      persistent
      max-width="1000px"
      style="z-index: 1501;"
    >
      <v-card>
        <v-card-subtitle>
          <v-container>
            <p class="headline" style="margin-top: 30px;">新设备绑定</p>
          </v-container>
        </v-card-subtitle>
        <v-card-text>
              <v-text-field
                v-model="newDevice.AppKey"
                label="AppKey"
                append-icon="mdi-face-recognition"
                outlined
              ></v-text-field>

              <v-text-field
                v-model="newDevice.AppSecret"
                append-icon="mdi-email-outline"
                label="AppSecret"
                outlined
              ></v-text-field>

              <v-text-field
                v-model="newDevice.DeviceId"
                append-icon="mdi-account"
                label="DeviceId"
                outlined
              ></v-text-field>

              <v-text-field
                v-model="newDevice.ProductId"
                label="ProductId"
                outlined
              ></v-text-field>

            <v-text-field
              v-model="newDevice.MasterKey"
              label="MasterKey"
              outlined
            ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            color="red lighten-1"
            @click="cancelBindNewDevice"
          >
            <v-icon>
              mdi-delete
            </v-icon>
            Cancel
          </v-btn>
          <v-btn
            outlined
            color="blue lighten-1"
            class="ml-4"
            @click="addNewDevice"
          >
            <v-icon>
              mdi-pencil
            </v-icon>
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import router from "@/router";
import {
  getTemperatureParams,
  setHighHumidityThresholdReq,
  setLowHumidityThresholdReq,
  setPreHighHumidityThresholdReq, setPreLowHumidityThresholdReq
} from "@/api/humidityThreshold";
import {actionFailed, actionPostFailed, actionSuccess} from "@/components/ActionState";
import {getHumidityParams, monitoringHumidityCycleReq} from "@/api/humidity";
import {
  setHighTemperatureThresholdReq,
  setLowTemperatureThresholdReq,
  setPreHighTemperatureThresholdReq, setPreLowTemperatureThresholdReq
} from "@/api/temperatureThreshold";
import {historyTAndHeReq, monitoringTemperatureCycleReq} from "@/api/temperature";
import {baseModeReq, deviceReq, modeReq} from "@/api/Device";

export default {
  name: "ControlView",
  data() {
    return {
      colorClass: [
        "blue-color",
        "light-blue-color",
        "yellow-color",
        "purple-color",
        "while-color",
        "red-color",
        "green-color",
      ],
      selectedMode: [],
      modes: [
        '温度监控',
        '湿度监控'
      ],
      search: '',
      headers: [
        {
          text: '时间',
          align: 'start',
          value: 'time',
        },
        { text: '温度', value: 'temperature' },
        { text: '湿度', value: 'humidity' },
      ],
      desserts: [],
      highTemperatureThreshold: 0,
      lowTemperatureThreshold: 0,
      preHighTemperatureThreshold: 0,
      preLowTemperatureThreshold: 0,
      highHumidityThreshold: 0,
      lowHumidityThreshold: 0,
      preHighHumidityThreshold: 0,
      preLowHumidityThreshold: 0,
      deviceId: "???",
      Tcycle: 1000,
      Hcycle: 1000,
      controlCycle: false,
      typeC: -1,
      newCycle: "",
      mobileFlag: false,
      controlT: false,
      newT: "",
      typeT: -1,
      controlH: false,
      newH: "",
      typeH: -1,
      deviceBindDialog: false,
      newDevice: {},
      boardStates: [
        {
          name: "实时温度",
          value: "暂无数据",
          colorClass: {
            'temperature-color': true,
          },
          baseClass: {
            'state-avatar': true,
          },
          imgId: "st0",
          gotoLink: function () {
            router.push({name: 'temperature'});
          }
        },
        {
          name: "实时湿度",
          value: "暂无数据",
          colorClass: {
            'humidity-color': true,
          },
          baseClass: {
            'state-avatar': true,
          },
          imgId: "st1",
          gotoLink: function () {
            router.push({name: 'humidity'});
          }
        },
        {
          name: "电机状态",
          value: "暂无数据",
          colorClass: {
            'motor-color': true,
          },
          baseClass: {
            'state-avatar': true,
            'motor': true,
          },
          imgId: "st2",
          gotoLink: function () {
            router.push({name: 'exhaust'});
          }
        },
        {
          name: "温度电灯状态",
          value: "暂无数据",
          colorClass: {
            'blue-color': true,

          },
          baseClass: {
            'state-avatar': true,
            'flashing': true,
          },
          imgId: "st3",
          gotoLink: function () {
            router.push({name: 'exhaust'});
          }
        },
        {
          name: "湿度电灯状态",
          value: "暂无数据",
          colorClass: {
            'blue-color': true,
          },
          baseClass: {
            'state-avatar': true,
            'flashing': true,
          },
          imgId: "st4",
          gotoLink: function () {
            router.push({name: 'exhaust'});
          }
        },
        {
          name: "排风系统",
          value: "暂无数据",
          colorClass: {
            'exhaust-color': true,

          },
          baseClass: {
            'state-avatar': true
          },
          imgId: "st5",
          gotoLink: function () {
            router.push({name: 'exhaust'});
          }
        },
        {
          name: "加热系统",
          value: "暂无数据",
          colorClass: {
            'heating-color': true
          },
          baseClass: {
            'state-avatar': true
          },
          imgId: "st6",
          gotoLink: function () {
            router.push({name: 'heating'});
          }
        },
      ]
    }
  },
  methods: {
    loadTemperatureParams() {
      let vm = this;
      getTemperatureParams('get',{

      }).then(res => {
        if (res.data.success) {
          vm.highTemperatureThreshold = res.data.data.highTemperatureThreshold;
          vm.lowTemperatureThreshold = res.data.data.lowTemperatureThreshold;
          vm.preHighTemperatureThreshold = res.data.data.preHighTemperatureThreshold;
          vm.preLowTemperatureThreshold = res.data.data.preLowTemperatureThreshold;
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed();
      })
    },
    loadHumidityParams() {
      let vm = this;
      getHumidityParams('get',{

      }).then(res => {
        if (res.data.success) {
          vm.highHumidityThreshold = res.data.data.highHumidityThreshold;
          vm.lowHumidityThreshold = res.data.data.lowHumidityThreshold;
          vm.preHighHumidityThreshold = res.data.data.preHighHumidityThreshold;
          vm.preLowHumidityThreshold = res.data.data.preLowHumidityThreshold;
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed()
      })
    },
    loadTemperatureCycle() {
      let vm = this;
      monitoringTemperatureCycleReq('get',{

      }).then(res => {
        if (res.data.success) {
          vm.Tcycle = res.data.data.cycle;
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed()
      })
    },
    loadHumidityCycle() {
      let vm = this;
      monitoringHumidityCycleReq('get',{

      }).then(res => {
        if (res.data.success) {
          vm.Hcycle = res.data.data.cycle;
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed()
      })
    },
    loadDevice() {
      let vm = this;
      deviceReq('get',{

      }).then(res => {
        if (res.data.success) {
          console.log(res.data);
          vm.deviceId = res.data.data.DeviceId;
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed();
      })
    },
    openControlCycle(typeC) {
      this.controlCycle = true;
      this.typeC = typeC;
    },
    cancelControlCycle() {
      this.controlCycle = false;
      this.typeC = -1;
      this.newCycle = "";
    },
    addNewCycle() {
      let vm = this;
      if (this.typeC === 1) {
        monitoringTemperatureCycleReq('post', {
          cycle: this.newCycle
        }).then(res => {
          if (res.data.success) {
            vm.Tcycle = vm.newCycle;
            vm.newCycle = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res);
          }
        }).catch(err => {
          actionFailed();
        })
      } else if (this.typeC === 2) {
        monitoringHumidityCycleReq('post', {
          cycle: this.newCycle
        }).then(res => {
          if (res.data.success) {
            vm.Hcycle = vm.newCycle;
            vm.newCycle = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res);
          }
        }).catch(err => {
          actionFailed();
        })
      }
    },
    openControlT(typeT) {
      this.controlT = true;
      this.typeT = typeT;
    },
    cancelControlT() {
      this.controlT = false;
      this.newT = "";
      this.typeT = - 1;
    },
    addNewControlT() {
      let vm = this;
      if (this.typeT === 1) {
        setHighTemperatureThresholdReq('get',{
          temperature: vm.newT,
        }).then(res => {
          if (res.data.success) {
            vm.highTemperatureThreshold = vm.newT;
            vm.newT = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res)
          }
        }).catch(err => {
          vm.highTemperatureThreshold = vm.newT;
          actionFailed();
        })
      } else if (this.typeT === 2) {
        setLowTemperatureThresholdReq('get', {
          temperature: vm.newT
        }).then(res => {
          if (res.data.success) {
            vm.lowTemperatureThreshold = vm.newT;
            vm.newT = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res)
          }
        }).catch(err => {
          vm.lowTemperatureThreshold = vm.newT;
          actionFailed();
        })
      } else if (this.typeT === 3) {
        setPreHighTemperatureThresholdReq('get', {
          temperature: vm.newT
        }).then(res => {
          if (res.data.success) {
            vm.preHighTemperatureThreshold = vm.newT;
            vm.newT = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res)
          }
        }).catch(err => {
          vm.preHighTemperatureThreshold = vm.newT;
          actionFailed();
        })
      } else if (this.typeT === 4) {
        setPreLowTemperatureThresholdReq('get', {
          temperature: vm.newT
        }).then(res => {
          if (res.data.success) {
            vm.preLowTemperatureThreshold = vm.newT;
            vm.newT = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res)
          }
        }).catch(err => {
          vm.preLowTemperatureThreshold = vm.newT;
          actionFailed();
        })
      }
      this.controlT = false;
      this.typeT = - 1;
    },
    openControlH(typeH) {
      this.controlH = true;
      this.typeH = typeH;
    },
    cancelControlH() {
      this.controlH = false;
      this.newH = "";
      this.typeH = -1;
    },
    addNewControlH() {
      let vm = this;
      // console.log(this.typeH)
      if (this.typeH === 1) {
        setHighHumidityThresholdReq('get',{
          humidity: this.newH
        }).then(res => {
          if (res.data.success) {
            vm.highHumidityThreshold = vm.newH;
            this.newH = "";
            actionSuccess(res);
          } else {

            actionPostFailed(res);
          }
        }).catch(err => {
          vm.highHumidityThreshold = vm.newH;
          actionFailed();
        })
      } else if (this.typeH === 2) {
        setLowHumidityThresholdReq('get',{
          humidity: this.newH
        }).then(res => {
          if (res.data.success) {
            vm.lowHumidityThreshold = vm.newH;
            this.newH = "";
            actionSuccess(res);
          } else {

            actionPostFailed(res);
          }
        }).catch(err => {
          vm.lowHumidityThreshold = vm.newH;
          actionFailed();
        })
      } else if (this.typeH === 3) {
        setPreHighHumidityThresholdReq('get',{
          humidity: this.newH
        }).then(res => {
          if (res.data.success) {
            vm.preHighHumidityThreshold = vm.newH;
            this.newH = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res);
          }
        }).catch(err => {
          vm.preHighHumidityThreshold = vm.newH;
          actionFailed();
        })
      } else if (this.typeH === 4) {
        setPreLowHumidityThresholdReq('get',{
          humidity: this.newH
        }).then(res => {
          if (res.data.success) {
            vm.preLowHumidityThreshold = vm.newH;
            this.newH = "";
            actionSuccess(res);
          } else {
            actionPostFailed(res);
          }
        }).catch(err => {
          vm.preLowHumidityThreshold = vm.newH;
          actionFailed();
        })
      }
      this.controlH = false;
      this.typeH = -1;
    },
    cancelBindNewDevice() {
      this.deviceBindDialog = false;
      this.newDevice = {};
    },
    addNewDevice() {
      this.deviceBindDialog = false;
      let vm = this;
      deviceReq('post', {
        AppKey: vm.newDevice.AppKey,
        AppSecret: vm.newDevice.AppSecret,
        DeviceId: vm.newDevice.DeviceId,
        ProductId: vm.newDevice.ProductId,
        MasterKey: vm.newDevice.MasterKey,
      }).then(res => {
        if (res.data.success) {
          vm.deviceId = vm.newDevice.DeviceId;
          vm.newDevice = {};
          actionSuccess(res);
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed();
      })
    },
    changeMode() {
      let t = false;
      let h = false;
      t = this.selectedMode.includes("温度监控");
      h = this.selectedMode.includes("湿度监控");
      let vm = this;
      modeReq('post', {
        temperature: t,
        humidity: h
      }).then(res => {
        if (res.data.success) {
          actionSuccess(res);
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed();
      })
    },
    loadHistoryData() {
      let vm = this;
      historyTAndHeReq('get', {

      }).then(res => {
        if (res.data.success) {
          vm.desserts = res.data.data.TandH;
          console.log(vm.desserts)
          actionSuccess(res);
        } else {
          actionPostFailed(res)
        }
      }).catch(err => {
        actionFailed();
      })
    },
    loadBase() {
      let vm = this;
      baseModeReq('get', {

      }).then(res => {
        if (res.data.success) {
          vm.boardStates[0].value = res.data.data.temperature;
          vm.boardStates[1].value = res.data.data.humidity;
          let st = Number.parseInt(res.data.data.state);
          // 电机状态
          if (((st & 1) === 1 && ((st >> 1) & 1) === 1) || ((((st >> 4) & 1) === 1)) && (((st >> 5) & 1) === 1)) {
            vm.boardStates[2].value = "开启";
            document.getElementsByClassName('motor')[0].classList.add('rotate');
          } else {
            vm.boardStates[2].value = "关闭";
            document.getElementsByClassName('motor')[0].classList.remove('rotate');
          }

          if (((st & 1) === 1 && ((st >> 1) & 1) === 1 && (((st >> 2) & 1) === 1) && (((st >> 3) & 1) === 1)) ||
            ((((st >> 4) & 1) === 1)) && (((st >> 5) & 1) === 1) && (((st >> 6) & 1) === 1) && (((st >> 7) & 1) === 1)) {
            vm.boardStates[5].value = "开启";
          } else {
            vm.boardStates[5].value = "关闭";
          }

          if (((st & 1) === 1 && ((st >> 1) & 1) === 1 && (((st >> 2) & 1) === 0) && (((st >> 3) & 1) === 1)) ||
            ((((st >> 4) & 1) === 1)) && (((st >> 5) & 1) === 1) && (((st >> 6) & 1) === 0) && (((st >> 7) & 1) === 1)) {
            vm.boardStates[6].value = "开启";
          } else {
            vm.boardStates[6].value = "关闭";
          }

          let bulb2 = document.getElementById(vm.boardStates[4].imgId).classList;
          // 湿度电灯
          if ((st >> 3) & 1) {
            let three = (st >> 2) & 1;
            let two = (st >> 1) & 1;
            let one = st & 1;
            if (three === 1 && two === 0 && one === 0) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("yellow-color");
              vm.boardStates[4].value = "黄灯"
            } else if (three === 0 && two === 0 && one === 0) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("purple-color");
              vm.boardStates[4].value = "紫灯"
            } else if (three === 1 && two === 0 && one === 1) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("light-blue-color");
              vm.boardStates[4].value = "浅蓝灯"
            } else if (three === 1 && two === 1 && one === 0) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("light-blue-color");
              vm.boardStates[4].value = "浅蓝灯"
            } else if (three === 1 && two === 1 && one === 1) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("green-color");
              vm.boardStates[4].value = "绿灯"
            } else if (three === 0 && two === 0 && one === 1) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("white-color");
              vm.boardStates[4].value = "白灯"
            } else if (three === 0 && two === 1 && one === 0) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("white-color");
              vm.boardStates[4].value = "白灯"
            } else if (three === 0 && two === 1 && one === 1) {
              vm.colorClass.forEach(a => bulb2.remove(a))
              document.getElementById(vm.boardStates[4].imgId).classList.add("red-color");
              vm.boardStates[4].value = "红灯"
            }
          } else {
            //蓝灯
            vm.colorClass.forEach(a => bulb2.remove(a))
            document.getElementById(vm.boardStates[4].imgId).classList.add("blue-color");
            vm.boardStates[4].value = "蓝灯"
          }

          let bulb1 = document.getElementById(vm.boardStates[3].imgId).classList;
          // 温度电灯
          if ((st >> 7) & 1) {
            let three = (st >> 6) & 1;
            let two = (st >> 5) & 1;
            let one = (st >> 4) & 1;
            if (three === 1 && two === 0 && one === 0) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("yellow-color");
              vm.boardStates[3].value = "黄灯"
            } else if (three === 0 && two === 0 && one === 0) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("purple-color");
              vm.boardStates[3].value = "紫灯"
            } else if (three === 1 && two === 0 && one === 1) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("light-blue-color");
              vm.boardStates[3].value = "浅蓝灯"
            } else if (three === 1 && two === 1 && one === 0) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("light-blue-color");
              vm.boardStates[3].value = "浅蓝灯"
            } else if (three === 1 && two === 1 && one === 1) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("green-color");
              vm.boardStates[3].value = "绿灯"
            } else if (three === 0 && two === 0 && one === 1) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("white-color");
              vm.boardStates[3].value = "白灯"
            } else if (three === 0 && two === 1 && one === 0) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("white-color");
              vm.boardStates[3].value = "白灯"
            } else if (three === 0 && two === 1 && one === 1) {
              vm.colorClass.forEach(a => bulb1.remove(a));
              document.getElementById(vm.boardStates[3].imgId).classList.add("red-color");
              vm.boardStates[3].value = "红灯"
            }
          } else {
            //蓝灯
            vm.colorClass.forEach(a => bulb1.remove(a));
            document.getElementById(vm.boardStates[3].imgId).classList.add("blue-color");
            vm.boardStates[3].value = "蓝灯"
          }

        }
      }).catch(err => {

      })
    },
    loadMonitorMode() {
      let vm = this;
      modeReq('get', {

      }).then(res => {
        if (res.data.success) {
          if (res.data.data.temperature) {
            vm.selectedMode.push("温度监控");
          }
          if (res.data.data.humidity) {
            vm.selectedMode.push("湿度监控");
          }
        }
      }).catch(err => {

      })
    },
  },
  beforeMount() {
    this.mobileFlag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) !== null;
  },
  mounted() {
    this.loadTemperatureParams();
    this.loadHumidityParams();
    this.loadTemperatureCycle();
    this.loadHumidityCycle();
    this.loadDevice();
    this.loadBase();
    this.loadMonitorMode();
    setInterval(this.loadBase, 1000);
  }
}
</script>

<style scoped>
.state-avatar:hover {
  opacity: 0.7;
  cursor: pointer;
}

.rotate {
  animation: fadenum 0.1s infinite linear;
}
@keyframes fadenum {
  100% {
    transform: rotate(360deg);
  }
}

.flashing {
  animation: twinkle 0.1s infinite alternate;
}
@keyframes twinkle {
  0%{
    opacity: 0.8;
  }
  100%{
    opacity:0;
  }
}

.temperature-color {
  background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
}

.humidity-color {
  background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
}

.motor-color {
  background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
}

.exhaust-color {
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
}

.heating-color {
  background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
}
.blue-color {
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
}

.light-blue-color {
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}

.yellow-color {
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
}

.purple-color {
  background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);
}

.while-color {
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
}

.red-color {
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
}

.green-color {
  background-image: linear-gradient(to top, #9be15d 0%, #00e3ae 100%);
}

.left-bg {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

</style>
