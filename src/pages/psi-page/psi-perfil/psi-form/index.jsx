import { Row, Col, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../../components/button";
import { useWindowSize } from "../../../../hooks/index";
import { getAppointments } from "../../../../redux/actions/appointments";
import { getOneUser, patchUserInfo } from "../../../../redux/actions/users";
import {
  PsiCard,
  StyledWorkForm,
  StyledRate,
  StyledPsicName,
  StyledPsicNameCenter,
} from "../styled";

const PsiForm = ({ oneUser, login, allAppointments, isEditable }) => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  let psicInfo = {};
  const { TextArea } = Input;
  const { Option } = Select;
  const [form] = Form.useForm();

  const [selectedHoursSeg, setSelectedHoursSeg] = useState([]);
  const [selectedHoursTer, setSelectedHoursTer] = useState([]);
  const [selectedHoursQua, setSelectedHoursQua] = useState([]);
  const [selectedHoursQui, setSelectedHoursQui] = useState([]);
  const [selectedHoursSex, setSelectedHoursSex] = useState([]);
  const OPTIONS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let filteredOptionsSeg = [...OPTIONS];
  let filteredOptionsTer = [...OPTIONS];
  let filteredOptionsQua = [...OPTIONS];
  let filteredOptionsQui = [...OPTIONS];
  let filteredOptionsSex = [...OPTIONS];
  const handleOnChangeSeg = (value) => {
    setSelectedHoursSeg(value);
    filteredOptionsSeg = OPTIONS.filter((o) => !selectedHoursSeg.includes(o));
  };
  const handleOnChangeTer = (value) => {
    setSelectedHoursTer(value);
    filteredOptionsTer = OPTIONS.filter((o) => !selectedHoursTer.includes(o));
  };
  const handleOnChangeQua = (value) => {
    setSelectedHoursQua(value);
    filteredOptionsQua = OPTIONS.filter((o) => !selectedHoursQua.includes(o));
  };
  const handleOnChangeQui = (value) => {
    setSelectedHoursQui(value);
    filteredOptionsQui = OPTIONS.filter((o) => !selectedHoursQui.includes(o));
  };
  const handleOnChangeSex = (value) => {
    setSelectedHoursSex(value);
    filteredOptionsSex = OPTIONS.filter((o) => !selectedHoursSex.includes(o));
  };

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  // const priceLayout = {
  //   labelCol: {
  //     span: 4,
  //   },
  //   wrapperCol: {
  //     span: 9,
  //   },
  // };
  const workDaysLayout = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 21,
    },
  };
  const formRef = React.createRef();

  const handleOnFinish = (values) => {
    // console.log("valuesBefore", values);
    if (values.price) {
      values.price = parseInt(values.price);
    }
    const newWorkDays = {};
    Object.keys(values).map((key) => {
      if (key === "1") {
        if (values["1"]) {
          newWorkDays[1] = values["1"].sort(function (a, b) {
            return a - b;
          });
        } else {
          newWorkDays[1] = seg;
        }
      } else if (key === "2") {
        if (values["2"]) {
          newWorkDays[2] = values["2"].sort(function (a, b) {
            return a - b;
          });
        } else {
          newWorkDays[2] = ter;
        }
      } else if (key === "3") {
        if (values["3"]) {
          newWorkDays[3] = values["3"].sort(function (a, b) {
            return a - b;
          });
        } else {
          newWorkDays[3] = qua;
        }
      } else if (key === "4") {
        if (values["4"]) {
          newWorkDays[4] = values["4"].sort(function (a, b) {
            return a - b;
          });
        } else {
          newWorkDays[4] = qui;
        }
      } else if (key === "5") {
        if (values["5"]) {
          newWorkDays[5] = values["5"].sort(function (a, b) {
            return a - b;
          });
        } else {
          newWorkDays[5] = sex;
        }
      }
    });
    let newValues = {};
    Object.keys(values).map((key) => {
      if (values[key] !== undefined && key != 1 && key != 2 && key != 3 && key != 4 && key != 5) {
        newValues[key] = values[key];
      }
    });
    newValues = { ...newValues, workDays: { ...newWorkDays } };
    // console.log("newValues", newValues);
    dispatch(patchUserInfo(login.user.id, login.token, { ...newValues }));
  };

  const handleOnReset = () => {
    form.setFieldsValue({
      price: psicInfo.price || "Adicione o valor da consulta",
      description: psicInfo.description || "Adicione uma descrição sobre você",
      experience: psicInfo.experience || "Adicione suas experiências",
      specializations: psicInfo.specializations || "Adicione suas especialidades",
      language: psicInfo.language || "Adicione seus idiomas",
      academic_formation: psicInfo.academic_formation || "Adicione sua formação acadêmica",
      video: psicInfo.video || "Adicione um vídeo de apresentação",
      1: seg,
      2: ter,
      3: qua,
      4: qui,
      5: sex,
    });
    setSelectedHoursSeg(seg);
    setSelectedHoursTer(ter);
    setSelectedHoursQua(qua);
    setSelectedHoursQui(qui);
    setSelectedHoursSex(sex);
  };

  const children = [];
  for (let i = 7; i < 20; i++) {
    children.push(<Option key={i}>{`${i}h`}</Option>);
  }

  // function handleChange(value) {
  // console.log(`selected ${value}`);
  // }

  useEffect(() => {
    if (JSON.stringify(oneUser) === "{}") {
      dispatch(getOneUser());
    }
    if (JSON.stringify(allAppointments) === "{}") {
      dispatch(getAppointments());
    }
  }, []);

  let seg,
    ter,
    qua,
    qui,
    sex = [];
  if (oneUser.workDays && allAppointments) {
    psicInfo = oneUser;
    if (psicInfo.workDays[1]) {
      seg = psicInfo.workDays[1];
    } else {
      seg = [];
    }
    if (psicInfo.workDays[2]) {
      ter = psicInfo.workDays[2];
    } else {
      ter = [];
    }
    if (psicInfo.workDays[3]) {
      qua = psicInfo.workDays[3];
    } else {
      qua = [];
    }
    if (psicInfo.workDays[4]) {
      qui = psicInfo.workDays[4];
    } else {
      qui = [];
    }
    if (psicInfo.workDays[5]) {
      sex = psicInfo.workDays[5];
    } else {
      sex = [];
    }
  }
  useEffect(() => {
    setSelectedHoursSeg(seg);
    setSelectedHoursTer(ter);
    setSelectedHoursQua(qua);
    setSelectedHoursQui(qui);
    setSelectedHoursSex(sex);
  }, [oneUser]);

  return (
    <div className="psi-form">
      {psicInfo
        ? allAppointments && (
            <Row className="row-info">
              <Col className="col-left col" xs={24} sm={24} md={6} lg={6} xl={5}>
                <div className="card-wrapper">
                  <StyledPsicName className="card-name">{psicInfo.name}</StyledPsicName>

                  <PsiCard>
                    <div className="card-avatar">
                      {psicInfo.image ? (
                        <img className="img-avatar" src={psicInfo.image} alt="Psicologo avatar" />
                      ) : (
                        <Form
                          {...layout}
                          ref={formRef}
                          name="control-ref-avatar"
                          onFinish={handleOnFinish}
                          defaultValue={{
                            remember: true,
                          }}
                          form={form}>
                          <p className="input-title">Meu avatar</p>
                          <Form.Item name="image" label="">
                            <TextArea
                              className="form-text-area"
                              disabled={!isEditable}
                              defaultValue="Adicione uma imagem"
                              bordered={false}
                              autoSize={{ minRows: 4 }}
                            />
                          </Form.Item>
                        </Form>
                      )}
                    </div>
                    <div className="card-text">
                      <p className="crp">CRP: {psicInfo.crp}</p>
                      <div className="rating">
                        <StyledRate allowHalf value={psicInfo.rating} />
                      </div>
                      {width >= 768 && (
                        <p className="price-tag input-title">Valor do atendimento</p>
                      )}
                      <Form
                        // {...priceLayout}
                        ref={formRef}
                        name="control-ref-price"
                        onFinish={handleOnFinish}
                        defaultValue={{
                          remember: true,
                        }}
                        form={form}>
                        <div className="card-price">
                          <span className="price-label">R$</span>
                          <Form.Item name="price" label="" colon={false}>
                            <TextArea
                              className="form-price-area"
                              disabled={!isEditable}
                              defaultValue={psicInfo.price || "Valor"}
                              bordered={false}
                              autoSize={{ minRows: 1, maxRows: 1 }}
                            />
                          </Form.Item>
                        </div>
                      </Form>
                    </div>
                  </PsiCard>
                </div>
              </Col>

              <Col className="col-center col" xs={24} sm={24} md={18} lg={18} xl={10}>
                <StyledPsicNameCenter className="card-name">{psicInfo.name}</StyledPsicNameCenter>
                <Form
                  {...layout}
                  ref={formRef}
                  name="control-ref-description"
                  onFinish={handleOnFinish}
                  defaultValue={{
                    remember: true,
                  }}
                  form={form}>
                  <p className="input-title">Sobre mim</p>
                  <Form.Item name="description" label="">
                    <TextArea
                      className="form-text-area"
                      disabled={!isEditable}
                      defaultValue={psicInfo.description || "Adicione uma descrição sobre você"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 20 }}
                    />
                  </Form.Item>
                  <p className="input-title">Experiências</p>
                  <Form.Item name="experience" label="">
                    <TextArea
                      className="form-text-area"
                      disabled={!isEditable}
                      defaultValue={psicInfo.experience || "Adicione suas experiências"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 20 }}
                    />
                  </Form.Item>
                  <p className="input-title">Especialidades</p>
                  <Form.Item name="specializations" label="">
                    <TextArea
                      className="form-text-area"
                      disabled={!isEditable}
                      defaultValue={psicInfo.specializations || "Adicione suas especialidades"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 20 }}
                    />
                  </Form.Item>
                  <p className="input-title">Idiomas</p>
                  <Form.Item name="language" label="">
                    <TextArea
                      className="form-text-area"
                      disabled={!isEditable}
                      defaultValue={psicInfo.language || "Adicione seus idiomas"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 20 }}
                    />
                  </Form.Item>
                </Form>
              </Col>

              <Col className="col-space col" xs={0} sm={0} md={6} lg={6} xl={0} />
              <Col className="col-right col" xs={24} sm={24} md={18} lg={18} xl={9}>
                {width >= 1200 && <div style={{ height: "66px" }} />}
                <Form
                  {...layout}
                  ref={formRef}
                  name="control-ref-formation"
                  onFinish={handleOnFinish}
                  defaultValue={{
                    remember: true,
                  }}
                  form={form}>
                  <p className="input-title">Formação acadêmica</p>
                  <Form.Item name="academic_formation" label="">
                    <TextArea
                      className="form-text-area"
                      disabled={!isEditable}
                      defaultValue={
                        psicInfo.academic_formation || "Adicione sua formação acadêmica"
                      }
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 20 }}
                    />
                  </Form.Item>
                </Form>
                <div className="psic-video">
                  <p className="video-tag input-title">Vídeo de apresentação</p>
                  {psicInfo.video ? (
                    <iframe className="psic-video" width="385" height="215" src={psicInfo.video} />
                  ) : (
                    <Form
                      {...layout}
                      ref={formRef}
                      name="control-ref-video"
                      onFinish={handleOnFinish}
                      defaultValue={{
                        remember: true,
                      }}
                      form={form}>
                      <Form.Item name="video" label="">
                        <TextArea
                          className="form-text-area"
                          disabled={!isEditable}
                          defaultValue="Adicione um vídeo de apresentação"
                          bordered={false}
                          autoSize={{ minRows: 1, maxRows: 20 }}
                        />
                      </Form.Item>
                    </Form>
                  )}
                </div>
              </Col>
            </Row>
          )
        : ""}
      {isEditable && (
        <Row className="row-work-days">
          <Col className="col-space col" xs={0} sm={0} md={6} lg={5} xl={5} />
          <Col className="col-work-days" xs={24} sm={24} md={18} lg={19} xl={19}>
            <p className="work-days-tag input-title">Horários de atendimento</p>
            <StyledWorkForm>
              <Form
                {...workDaysLayout}
                ref={formRef}
                name="control-ref-workdays"
                onFinish={handleOnFinish}
                defaultValue={{
                  remember: true,
                }}
                form={form}>
                <Form.Item name="1" label="Segunda" colon={false}>
                  <Select
                    mode="multiple"
                    placeholder="Selecione os horários de atendimento"
                    defaultValue={seg}
                    onChange={handleOnChangeSeg}
                    style={{ width: "100%" }}>
                    {filteredOptionsSeg.map((item) => (
                      <Select.Option key={item} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="2" label="Terça" colon={false}>
                  <Select
                    mode="multiple"
                    placeholder="Selecione os horários de atendimento"
                    defaultValue={ter}
                    onChange={handleOnChangeTer}
                    style={{ width: "100%" }}>
                    {filteredOptionsTer.map((item) => (
                      <Select.Option key={item} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="3" label="Quarta" colon={false}>
                  <Select
                    mode="multiple"
                    placeholder="Selecione os horários de atendimento"
                    defaultValue={qua}
                    onChange={handleOnChangeQua}
                    style={{ width: "100%" }}>
                    {filteredOptionsQua.map((item) => (
                      <Select.Option key={item} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="4" label="Quinta" colon={false}>
                  <Select
                    mode="multiple"
                    placeholder="Selecione os horários de atendimento"
                    defaultValue={qui}
                    onChange={handleOnChangeQui}
                    style={{ width: "100%" }}>
                    {filteredOptionsQui.map((item) => (
                      <Select.Option key={item} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="5" label="Sexta" colon={false}>
                  <Select
                    mode="multiple"
                    placeholder="Selecione os horários de atendimento"
                    defaultValue={sex}
                    onChange={handleOnChangeSex}
                    style={{ width: "100%" }}>
                    {filteredOptionsSex.map((item) => (
                      <Select.Option key={item} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item {...tailLayout} className="work-form-btn-group">
                  <Button
                    width="150px"
                    height="35px"
                    fontSize="19px"
                    title="Atualizar"
                    onClick={() => {}}
                    htmlType="submit"
                  />
                  <Button
                    width="150px"
                    height="35px"
                    fontSize="19px"
                    title="Desfazer"
                    onClick={handleOnReset}
                  />
                </Form.Item>
              </Form>
            </StyledWorkForm>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default PsiForm;
