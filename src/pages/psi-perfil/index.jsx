import { Row, Col, Rate, Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";
// import { Rating } from "primereact/rating";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.css";
// import "primereact/resources/primereact.min.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Calendar from "../../components/calendar";
import { useWindowSize } from "../../hooks/index";
import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser, patchUserInfo } from "../../redux/actions/users";
import { MainWrapper, PsiCard } from "./styled";

const PsiProfile = ({ userId, token }) => {
  const style = { background: "#0092ff", padding: "8px 0" };
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const oneUser = useSelector((state) => state.users.oneUser);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  let psicInfo = {};
  const { TextArea } = Input;
  const { Option } = Select;
  // const [infoEdited, setInfoEdited] = useState({});
  const [form] = Form.useForm();
  // let infoDefault = {};

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
  const priceLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const workDaysLayout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 50,
    },
  };
  const formRef = React.createRef();

  const handleOnFinish = (values) => {
    console.log("values", values);
    dispatch(patchUserInfo(userId, token, { ...values }));
  };

  const handleOnReset = () => {
    console.log("onreset");
    form.setFieldsValue({
      price: psicInfo.price || "Adicione o valor da consulta",
      description: psicInfo.description || "Adicione uma descrição sobre você",
      experience: psicInfo.experience || "Adicione suas experiências",
      // specializations: psicInfo.specializations.join(", ") || "Adicione suas especialidades",
      specializations: psicInfo.specializations || "Adicione suas especialidades",
      language: psicInfo.language || "Adicione seus idiomas",
      academic_formation: psicInfo.academic_formation || "Adicione sua formação acadêmica",
      video: psicInfo.video || "Adicione um vídeo de apresentação",
    });
  };

  const children = [];
  for (let i = 7; i < 20; i++) {
    children.push(<Option key={i}>{`${i}h`}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
  if (oneUser && allAppointments) {
    psicInfo = oneUser;
    // infoDefault = { ...psicInfo };
    // console.log(infoDefault);
    // console.log("psicInfo", psicInfo);
    // setInfoEdited(infoDefault);
    console.log(psicInfo.workDays[1]);
    if (psicInfo.workDays[1]) {
      seg = psicInfo.workDays[1];
    }
    if (psicInfo.workDays[2]) {
      ter = psicInfo.workDays[2];
    }
    if (psicInfo.workDays[3]) {
      qua = psicInfo.workDays[3];
    }
    if (psicInfo.workDays[4]) {
      qui = psicInfo.workDays[4];
    }
    if (psicInfo.workDays[5]) {
      sex = psicInfo.workDays[5];
    }
  }

  return (
    <MainWrapper>
      {psicInfo
        ? allAppointments && (
            <Row className="row-info">
              <Col className="col-left col" xs={24} sm={24} md={8} lg={8} xl={5}>
                {width < 768 && (
                  <div className="card-name" style={{ textAlign: "center" }}>
                    {psicInfo.name}
                  </div>
                )}
                <PsiCard>
                  <div className="card-avatar">
                    <img className="img-avatar" src={psicInfo.image} alt="Psicologo avatar" />
                  </div>
                  <div className="card-text">
                    <p className="crp">CRP: {psicInfo.crp}</p>
                    <Rate allowHalf value={psicInfo.rating} />
                    {width >= 768 && <p>Valor do atendimento</p>}
                    <p className="card-price">
                      {/* {parseInt(psicInfo.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })} */}
                      <Form
                        {...priceLayout}
                        ref={formRef}
                        name="control-ref"
                        onFinish={handleOnFinish}
                        defaultValue={{
                          remember: true,
                        }}
                        form={form}>
                        <Form.Item name="price" label="R$" colon={false}>
                          <TextArea
                            defaultValue={psicInfo.price || "Adicione o valor da consulta"}
                            bordered={false}
                            autoSize={{ minRows: 1, maxRows: 1 }}
                          />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                          <Button htmlType="button" onClick={handleOnReset}>
                            Reset
                          </Button>
                          <Button
                            type="link"
                            htmlType="button"
                            onClick={() => {
                              console.log("click");
                            }}>
                            Fill form
                          </Button>
                        </Form.Item>
                      </Form>
                    </p>
                  </div>
                </PsiCard>
              </Col>

              <Col className="col-center col" xs={24} sm={24} md={16} lg={16} xl={10}>
                {width >= 768 && <p className="card-name">{psicInfo.name}</p>}
                <Form
                  {...layout}
                  ref={formRef}
                  name="control-ref"
                  onFinish={handleOnFinish}
                  defaultValue={{
                    remember: true,
                  }}
                  form={form}>
                  <Form.Item name="description" label="Sobre mim">
                    <TextArea
                      defaultValue={psicInfo.description || "Adicione uma descrição sobre você"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item name="experience" label="Experiências">
                    <TextArea
                      defaultValue={psicInfo.experience || "Adicione suas experiências"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item name="specializations" label="Especialidades">
                    <TextArea
                      // defaultValue={
                      //   psicInfo.specializations.join(", ") || "Adicione suas especialidades"
                      // }
                      defaultValue={psicInfo.specializations || "Adicione suas especialidades"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item name="language" label="Idiomas">
                    <TextArea
                      defaultValue={psicInfo.language || "Adicione seus idiomas"}
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button htmlType="button" onClick={handleOnReset}>
                      Reset
                    </Button>
                    <Button
                      type="link"
                      htmlType="button"
                      onClick={() => {
                        console.log("click");
                      }}>
                      Fill form
                    </Button>
                  </Form.Item>
                </Form>
              </Col>

              <Col className="col-space col" xs={0} sm={0} md={8} lg={8} xl={0}>
                col-extra
              </Col>
              <Col className="col-right col" xs={24} sm={24} md={16} lg={16} xl={9}>
                <Form
                  {...layout}
                  ref={formRef}
                  name="control-ref"
                  onFinish={handleOnFinish}
                  defaultValue={{
                    remember: true,
                  }}
                  form={form}>
                  <Form.Item name="academic_formation" label="Formação acadêmica">
                    <TextArea
                      defaultValue={
                        psicInfo.academic_formation || "Adicione sua formação acadêmica"
                      }
                      bordered={false}
                      autoSize={{ minRows: 1, maxRows: 10 }}
                    />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button htmlType="button" onClick={handleOnReset}>
                      Reset
                    </Button>
                    <Button
                      type="link"
                      htmlType="button"
                      onClick={() => {
                        console.log("click");
                      }}>
                      Fill form
                    </Button>
                  </Form.Item>
                </Form>
                <div className="psic-video">
                  {psicInfo.video ? (
                    <iframe
                      width="385"
                      height="215"
                      src="https://www.youtube.com/embed/owiAfw-3_nY"
                    />
                  ) : (
                    <Form
                      {...layout}
                      ref={formRef}
                      name="control-ref"
                      onFinish={handleOnFinish}
                      defaultValue={{
                        remember: true,
                      }}
                      form={form}>
                      <Form.Item name="video" label="Vídeo de apresentação">
                        <TextArea
                          defaultValue="Adicione um vídeo de apresentação"
                          bordered={false}
                          autoSize={{ minRows: 1, maxRows: 10 }}
                        />
                      </Form.Item>
                      <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                        <Button htmlType="button" onClick={handleOnReset}>
                          Reset
                        </Button>
                        <Button
                          type="link"
                          htmlType="button"
                          onClick={() => {
                            console.log("click");
                          }}>
                          Fill form
                        </Button>
                      </Form.Item>
                    </Form>
                  )}
                </div>
              </Col>
            </Row>
          )
        : ""}
      <Row className="row-work-days">
        <Col className="col-work-days" xs={24} sm={24} md={24} lg={24} xl={24}>
          <Form
            {...workDaysLayout}
            ref={formRef}
            name="control-ref"
            onFinish={handleOnFinish}
            defaultValue={{
              remember: true,
            }}
            form={form}>
            <Form.Item name="1" label="Segunda" colon={false}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Selecione os horários de atendimento"
                defaultValue={[8, 9]}
                onChange={handleChange}>
                {children}
              </Select>
            </Form.Item>
            <Form.Item name="2" label="Terça" colon={false}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Selecione os horários de atendimento"
                defaultValue={ter}
                onChange={handleChange}>
                {children}
              </Select>
            </Form.Item>
            <Form.Item name="3" label="Quarta" colon={false}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Selecione os horários de atendimento"
                defaultValue={qua}
                onChange={handleChange}>
                {children}
              </Select>
            </Form.Item>
            <Form.Item name="4" label="Quinta" colon={false}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Selecione os horários de atendimento"
                defaultValue={qui}
                onChange={handleChange}>
                {children}
              </Select>
            </Form.Item>
            <Form.Item name="5" label="Sexta" colon={false}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Selecione os horários de atendimento"
                defaultValue={sex}
                onChange={handleChange}>
                {children}
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={handleOnReset}>
                Reset
              </Button>
              <Button
                type="link"
                htmlType="button"
                onClick={() => {
                  console.log("click");
                }}>
                Fill form
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row className="row-calendar">
        <Col className="col-calendar" xs={24} sm={24} md={24} lg={24} xl={24}>
          {oneUser
            ? allAppointments && (
                <Calendar
                  type="user-psic"
                  psicInfo={oneUser}
                  // patInfo={}
                  allAppointments={allAppointments}
                />
              )
            : ""}
        </Col>
      </Row>
    </MainWrapper>
  );
};

export default PsiProfile;
