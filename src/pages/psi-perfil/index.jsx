import { Row, Col, Rate, Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";
// import { Rating } from "primereact/rating";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.css";
// import "primereact/resources/primereact.min.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Calendar from "../../components/calendar";
import { useWindowSize } from "../../hooks/index";
import { getAppointments } from "../../redux/actions/appointments";
import { getUsers } from "../../redux/actions/users";
import { MainWrapper, PsiCard } from "./styled";

const PsiProfile = () => {
  const style = { background: "#0092ff", padding: "8px 0" };
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const allUsers = useSelector((state) => state.users.allUsers);
  const allAppointments = useSelector((state) => state.appointments.allAppointments);
  let psicInfo = {};
  const { TextArea } = Input;
  const { Option } = Select;

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
  const formRef = React.createRef();

  const handleOnFinish = () => {
    console.log("finished");
  };

  useEffect(() => {
    if (JSON.stringify(allUsers) === "{}") {
      dispatch(getUsers());
    }
    if (JSON.stringify(allAppointments) === "{}") {
      dispatch(getAppointments());
    }
  }, []);

  if (allUsers && allAppointments) {
    psicInfo = allUsers[13];
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
                    <Rate value={psicInfo.rating} />
                    {width >= 768 && <p>Valor do atendimento</p>}
                    <p>
                      {parseInt(psicInfo.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </PsiCard>
              </Col>

              <Col className="col-center col" xs={24} sm={24} md={16} lg={16} xl={10}>
                {width >= 768 && <p className="card-name">{psicInfo.name}</p>}
                <Form {...layout} ref={formRef} name="control-ref" onFinish={handleOnFinish}>
                  <Form.Item name="description" label="Sobre mim">
                    <TextArea
                      defaultValue={psicInfo.description || "Adicione uma descrição sobre você"}
                      bordered={false}
                      autoSize={{ minRows: 2, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item name="experience" label="Experiências">
                    <TextArea
                      defaultValue={psicInfo.experience || "Adicione suas experiências"}
                      bordered={false}
                      autoSize={{ minRows: 2, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item name="specializations" label="Especialidades">
                    <TextArea
                      defaultValue={
                        psicInfo.specializations.join(", ") || "Adicione suas especialidades"
                      }
                      bordered={false}
                      autoSize={{ minRows: 2, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item name="language" label="Idiomas">
                    <TextArea
                      defaultValue={psicInfo.language || "Adicione seus idiomas"}
                      bordered={false}
                      autoSize={{ minRows: 2, maxRows: 10 }}
                    />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button
                      htmlType="button"
                      onClick={() => {
                        console.log("click");
                      }}>
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
                <Form {...layout} ref={formRef} name="control-ref" onFinish={() => {}}>
                  <Form.Item name="academic_formation" label="Formação acadêmica">
                    <TextArea
                      defaultValue={
                        psicInfo.academic_formation || "Adicione sua formação acadêmica"
                      }
                      bordered={false}
                      autoSize={{ minRows: 2, maxRows: 10 }}
                    />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button
                      htmlType="button"
                      onClick={() => {
                        console.log("click");
                      }}>
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
                    <Form {...layout} ref={formRef} name="control-ref" onFinish={handleOnFinish}>
                      <Form.Item name="video" label="Vídeo de apresentação">
                        <TextArea
                          defaultValue="Adicione um vídeo de apresentação"
                          bordered={false}
                          autoSize={{ minRows: 2, maxRows: 10 }}
                        />
                      </Form.Item>
                      <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                        <Button
                          htmlType="button"
                          onClick={() => {
                            console.log("click");
                          }}>
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
      <Row className="row-calendar">
        <Col className="col-calendar" xs={24} sm={24} md={24} lg={24} xl={24}>
          {allUsers
            ? allAppointments && (
                <Calendar
                  type="psic-info"
                  psicInfo={allUsers["13"]}
                  patInfo={allUsers["12"]}
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
