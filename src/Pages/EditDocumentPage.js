import React, {useEffect, useState} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {fetchGetDocumentById, setModal} from "../store/actions/authModalActions";
import {Modal} from "../components/Modal/Modal";

const EditDocumentPageLayout = ({ info, setModal, fetchGetDocumentById }) => {
    const [redirectBack, setRedirectBack] = useState(false);
    const [services, setServices] = useState([]);
    const [service, setService] = useState("");

    const [charges, setCharges] = useState([]);
    const [charge, setCharge] = useState({
        name: "",
        units: "",
        number: "",
        cost: "",
        summary: "",
    });

    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");

    const [five, setFive] = useState("");
    const [six, setSix] = useState("");

    const [eight, setEight] = useState({
        ispNum: "",
        bankName: "",
        INN: "",
        KPP: "",
        BIK: "",
        RCH: "",
        KCH: "",
    });
    const [nine, setNine] = useState("");
    const [tenStart, setTenStart] = useState("");
    const [tenEnd, setTenEnd] = useState("");
    const [eleven, setEleven] = useState("");
    const [twelve, setTwelve] = useState("");
    const [thirdFirst, setThirdFirst] = useState("");
    const [thirdSecond, setThirdSecond] = useState("");
    const [fourteen, setFourteen] = useState({
        FIO: "",
        series: "",
        number: "",
        date: "",
        code: "",
        whose: "",
        ensure: "",
        index: "",
        region: "",
        city: "",
        OKTMO: "",
        street: "",
        building: "",
        corpus: "",
        flat: "",
        telephone: "",
        email: "",
        INN: "",
        dateLast: "",
    });

    useEffect(()=>{
        fetchGetDocumentById(info.selectedDocumentId)
    }, [])
    console.log(info)
    if (redirectBack)
        return(<Redirect to="/documents" />)

    const validate = () => {
        const result = {
            1: one,
            2: two,
            3: three,
            4: services,
            5: five,
            6: six,
            7: charges,
            8: eight,
            9: nine,
            10: {
                start: tenStart,
                end: tenEnd,
            },
            11: eleven,
            12: twelve,
            13: {
                lc: thirdFirst,
                fio: thirdSecond,
            },
            14: fourteen
        }
        setRedirectBack(true);
    }

    if (!info.isAuth) return <Redirect to="/" />;
    return (
        <div className="d-flex justify-content-center">
            {info.modalVisible ? <Modal/>:
                <div className="card w-75">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div>?????????? ?????????????????? ????????????????????-?????????????????? ?????????????????? ???? ????????????????
                            ?????????? ?? ?????????????????????? ????????????</div>
                        <div
                            className="btn btn-outline-secondary"
                            onClick={()=>setModal(true)}
                        >??????????</div>
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                        <span className="input-group-text w-50 d-flex justify-content-center">
                            ?????????????????????????????? ?????????? ????????????????
                        </span>
                            <input
                                value={one}
                                onChange={(e) => setOne(e.target.value)}
                                type="number"
                                className="form-control"
                                disabled={info.userRole!==2}
                                placeholder={info.userRole!==2 && "?????????????????????? ?????????????????? ?????????????????????? ??????????????"}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text w-50 d-flex justify-content-center">
                            ???????? ???????????????????? ??????????????????
                        </span>
                            <input
                                value={two}
                                onChange={(e) => setTwo(e.target.value)}
                                type="text"
                                className="form-control"
                                disabled={info.userRole!==2}
                                placeholder={info.userRole!==2 && "?????????????????????? ?????????????????? ?????????????????????? ??????????????"}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text w-25 d-flex justify-content-center">
                            ??????
                        </span>
                            <input
                                value={three}
                                onChange={(e) => setThree(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-text w-100 d-flex justify-content-center rounded mb-1">
                                ???????????? ?????????????????????? ??????????
                            </div>
                            <div className="d-flex flex-column w-100">
                                <div className="d-flex w-100 mb-1">
                                    <input
                                        placeholder="?????????????? ???????????????????????? ????????????"
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        type="text"
                                        className="form-control rounded me-2"
                                    />
                                    <div
                                        className="btn btn-outline-secondary"
                                        onClick={() => {
                                            if (service.trim())
                                                setServices((prevState) =>
                                                    prevState.concat({
                                                        id: Math.random(),
                                                        service,
                                                    })
                                                );
                                            setService("");
                                        }}
                                    >
                                        ????????????????
                                    </div>
                                </div>
                                {services.map((service, id) => {
                                    return (
                                        <div className="d-flex align-items-center">
                                            <div className="input-group input-group-sm mb-1 d-flex align-items-center">
                                            <span
                                                className="input-group-text d-flex justify-content-center"
                                                style={{ width: 30 }}
                                            >
                                                {id + 1}
                                            </span>
                                                <div className="form-control">
                                                    {service.service}
                                                </div>
                                                <div
                                                    className="btn-close ms-2"
                                                    onClick={() => {
                                                        setServices((prev) =>
                                                            prev.filter(
                                                                (serviceTmp) =>
                                                                    serviceTmp.service !==
                                                                    service.service
                                                            )
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="input-group mb-3">
                        <span
                            className="input-group-text w-50 text-wrap"
                            style={{ height: 75 }}
                        >
                            ?????????????????? ???????????????????? ?????????????????? ?? ???????????????????????? ??
                            ????????????????????-???????????????? ???????????? ?? ?????????? ??????????????
                        </span>
                            <textarea
                                value={five}
                                onChange={(e) => setFive(e.target.value)}
                                className="form-control text-wrap"
                                disabled={info.userRole!==2}
                                placeholder={info.userRole!==2 && "?????????????????????? ?????????????????? ?????????????????????? ??????????????"}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text w-50 text-wrap">
                            ?????????? ???????? ?????????????????? ?? ???????????? ???????? ???????????????? (?? ??????
                            ?????????? ?????????????? ???? ???????????????????????? ??????????)
                        </span>
                            <input
                                value={six}
                                onChange={(e) => setSix(e.target.value)}
                                type="number"
                                className="form-control text-wrap"
                                disabled={info.userRole!==3}
                                placeholder={info.userRole!==3 && "?????????????????????? ?????????????????? ??????????????-???????????????????????????? ????????????"}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-text w-100 d-flex justify-content-center rounded mb-1">
                                ??????????????, ???????????????? ?? ?????????????????? ??????????
                            </div>
                            <div className="d-flex flex-column w-100">
                                {info.userRole!==3 ? <input
                                        className="form-control text-wrap text-center"
                                        disabled={info.userRole!==3}
                                        placeholder={info.userRole!==3 && "?????????????????? ?????????????????? ??????????????-???????????????????????????? ????????????"}
                                    />:
                                    <div className="d-flex w-100 mb-1">
                                        <input
                                            placeholder="????????????????????????"
                                            style={{ width: 300 }}
                                            value={charge.name}
                                            onChange={(e) =>
                                                setCharge((prev) => ({
                                                    ...prev,
                                                    name: e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control rounded me-2"
                                        />
                                        <input
                                            placeholder="????. ??????."
                                            style={{ width: 100 }}
                                            value={charge.units}
                                            onChange={(e) =>
                                                setCharge((prev) => ({
                                                    ...prev,
                                                    units: e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control rounded me-2"
                                        />
                                        <input
                                            placeholder="??????-????"
                                            style={{ width: 100 }}
                                            value={charge.number}
                                            onChange={(e) =>
                                                setCharge((prev) => ({
                                                    ...prev,
                                                    number: e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control rounded me-2"
                                        />
                                        <input
                                            placeholder="?????????????????? 1 ????., ??????."
                                            style={{ width: 200 }}
                                            value={charge.cost}
                                            onChange={(e) =>
                                                setCharge((prev) => ({
                                                    ...prev,
                                                    cost: e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control rounded me-2"
                                        />
                                        <input
                                            placeholder="?????????? ??????????, ??????."
                                            style={{ width: 200 }}
                                            value={charge.summary}
                                            onChange={(e) =>
                                                setCharge((prev) => ({
                                                    ...prev,
                                                    summary: e.target.value,
                                                }))
                                            }
                                            type="text"
                                            className="form-control rounded me-2"
                                        />
                                        <div
                                            className="btn btn-outline-secondary"
                                            onClick={() => {
                                                setCharges((prevState) =>
                                                    prevState.concat({
                                                        id: Math.random(),
                                                        charge,
                                                    })
                                                );
                                                setCharge({
                                                    name: "",
                                                    units: "",
                                                    number: "",
                                                    cost: "",
                                                    summary: "",
                                                });
                                            }}
                                        >
                                            ????????????????
                                        </div>
                                    </div>}
                                {charges.map((charge) => {
                                    return (
                                        <div className="d-flex align-items-center mb-1">
                                            <div
                                                placeholder="????????????????????????"
                                                style={{ width: 300 }}
                                                className="form-control rounded me-2"
                                            >
                                                {charge.charge.name}
                                            </div>
                                            <div
                                                placeholder="????. ??????."
                                                style={{ width: 100 }}
                                                className="form-control rounded me-2"
                                            >
                                                {charge.charge.units}
                                            </div>
                                            <div
                                                placeholder="??????-????"
                                                style={{ width: 100 }}
                                                className="form-control rounded me-2"
                                            >
                                                {charge.charge.number}
                                            </div>
                                            <div
                                                placeholder="?????????????????? 1 ????., ??????."
                                                style={{ width: 200 }}
                                                className="form-control rounded me-2"
                                            >
                                                {charge.charge.cost}
                                            </div>
                                            <div
                                                placeholder="?????????? ??????????, ??????."
                                                style={{ width: 200 }}
                                                className="form-control rounded me-2"
                                            >
                                                {charge.charge.summary}
                                            </div>
                                            <div
                                                className="btn-close ms-2"
                                                style={{ width: 90 }}
                                                onClick={() => {
                                                    setServices((prev) =>
                                                        prev.filter(
                                                            (serviceTmp) =>
                                                                serviceTmp.service !==
                                                                service.service
                                                        )
                                                    );
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-text w-100 d-flex justify-content-center rounded mb-1">
                                ???????? ?? ???????????????????????? ?? ???????????????? ??????????
                            </div>
                            <div className="d-flex flex-column w-100 mb-1">
                                <div className="input-group mb-1">
                                <span className="input-group-text w-50 d-flex justify-content-center">
                                    ?????????????????????? ???
                                </span>
                                    <input
                                        value={eight.ispNum}
                                        onChange={(e) =>
                                            setEight((prev) => ({
                                                ...prev,
                                                ispNum: e.target.value,
                                            }))
                                        }
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-1">
                                <span className="input-group-text w-50 d-flex justify-content-center">
                                    ???????????????????????? ??????????
                                </span>
                                    <input
                                        value={eight.bankName}
                                        onChange={(e) =>
                                            setEight((prev) => ({
                                                ...prev,
                                                bankName: e.target.value,
                                            }))
                                        }
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-1">
                                <span className="input-group-text w-50 d-flex justify-content-center">
                                    ??????
                                </span>
                                    <input
                                        value={eight.INN}
                                        onChange={(e) =>
                                            setEight((prev) => ({
                                                ...prev,
                                                INN: e.target.value,
                                            }))
                                        }
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-1">
                                <span className="input-group-text w-50 d-flex justify-content-center">
                                    ??????
                                </span>
                                    <input
                                        value={eight.KPP}
                                        onChange={(e) =>
                                            setEight((prev) => ({
                                                ...prev,
                                                KPP: e.target.value,
                                            }))
                                        }
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-1">
                                <span className="input-group-text w-50 d-flex justify-content-center">
                                    ??????
                                </span>
                                    <input
                                        value={eight.BIK}
                                        onChange={(e) =>
                                            setEight((prev) => ({
                                                ...prev,
                                                BIK: e.target.value,
                                            }))
                                        }
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-1">
                                <span className="input-group-text w-50 d-flex justify-content-center">
                                    ??/????.
                                </span>
                                    <input
                                        value={eight.RCH}
                                        onChange={(e) =>
                                            setEight((prev) => ({
                                                ...prev,
                                                RCH: e.target.value,
                                            }))
                                        }
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-1">
                                <span className="input-group-text w-50 d-flex justify-content-center">
                                    ??/????.
                                </span>
                                    <input
                                        value={eight.KCH}
                                        onChange={(e) =>
                                            setEight((prev) => ({
                                                ...prev,
                                                KCH: e.target.value,
                                            }))
                                        }
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text w-50 d-flex justify-content-center">
                            ???????????????? ????????????????????????????
                        </span>
                            <input
                                value={nine}
                                onChange={(e) => setNine(e.target.value)}
                                type="text"
                                className="form-control"
                                disabled={info.userRole!==3}
                                placeholder={info.userRole!==3 && "?????????????????????? ?????????????????? ??????????????-???????????????????????????? ????????????"}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span
                            className="input-group-text w-50 d-flex justify-content-center text-wrap"
                            style={{ height: 70 }}
                        >
                            ???????? ???????????? ???????????????? ?????????? ?? ???????????????????????? ????
                            ??????????????, ???????????????????? ?? ?????????????????????? ??????????????
                            (???????????????????? 1 ?? ??????????????????) ?? ?????????????? ??????????????
                            ???????????????? ????????????
                        </span>
                            <input
                                value={tenStart}
                                onChange={(e) => setTenStart(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span
                            className="input-group-text w-50 d-flex justify-content-center text-wrap"
                            style={{ height: 70 }}
                        >
                            ???????? ?????????????????? ???????????????? ?????????? ???????????????????????? ????
                            ??????????????, ???????????????????? ?? ?????????????????????? ??????????????
                            (???????????????????? 1 ?? ??????????????????) ?? ?????????????? ??????????????
                            ???????????????? ????????????
                        </span>
                            <input
                                value={tenEnd}
                                onChange={(e) => setTenEnd(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span
                            className="input-group-text w-50 d-flex justify-content-center text-wrap"
                            style={{ height: 70 }}
                        >
                            ???????????????? ???????? ???????????????? ?????????????????? ?? ???????????? ????????????
                            ???????? ?????????????????????????? ????????????, ?????????????????? ?? ??????????????????
                        </span>
                            <input
                                value={eleven}
                                onChange={(e) => setEleven(e.target.value)}
                                type="text"
                                className="form-control"
                                disabled={info.userRole!==2}
                                placeholder={info.userRole!==2 && "?????????????????????? ?????????????????? ?????????????????????? ??????????????"}

                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text w-50 d-flex justify-content-center">
                            ????????, ?? ?????????????? ???????????????????? ???????????????? ??????????
                        </span>
                            <input
                                value={twelve}
                                onChange={(e) => setTwelve(e.target.value)}
                                type="text"
                                className="form-control"
                                disabled={info.userRole!==2}
                                placeholder={info.userRole!==2 && "?????????????????????? ?????????????????? ?????????????????????? ??????????????"}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span
                            className="input-group-text w-50 d-flex justify-content-center text-wrap"
                            style={{ height: 70 }}
                        >
                            ?????????????? ???????? ??????????????????, ?????????????????????????????? ??????????????????
                            ????????????????????????????, ???????????????????? ?? ??.2.6 ??????????????????.
                        </span>
                            <input
                                value={thirdFirst}
                                onChange={(e) => setThirdFirst(e.target.value)}
                                type="text"
                                className="form-control"
                                disabled={info.userRole!==2}
                                placeholder={info.userRole!==2 && "?????????????????????? ?????????????????? ?????????????????????? ??????????????"}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span
                            className="input-group-text w-50 d-flex justify-content-center text-wrap"
                            style={{ height: 70 }}
                        >
                            ?????????????????? ?? ?????? ????????, ?????????????????????????????? ???? ????????????????????
                            ?????????????????? ???? ?????????????? ??????????????????.
                        </span>
                            <input
                                value={thirdSecond}
                                onChange={(e) => setThirdSecond(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text w-100 d-flex justify-content-center mb-1">
                            ???????? ?? ???????????????????????? ?? ?????????????????????? ??????????????????????
                        </span>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ??????
                            </span>
                                <input
                                    value={fourteen.FIO}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            FIO: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ?????????? ????????????????
                            </span>
                                <input
                                    value={fourteen.series}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            series: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ?????????? ????????????????
                            </span>
                                <input
                                    value={fourteen.number}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            number: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ???????? ????????????
                            </span>
                                <input
                                    value={fourteen.date}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            date: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ?????? ??????????????????????????
                            </span>
                                <input
                                    value={fourteen.code}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            code: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ?????? ??????????
                            </span>
                                <input
                                    value={fourteen.whose}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            whose: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ?????????? ???????????????????? ?????????????????????????? ????
                            </span>
                                <input
                                    value={fourteen.ensure}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            ensure: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ???????????? ?????????? ??????????????????????
                            </span>
                                <input
                                    value={fourteen.index}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            index: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ???????????? ?????????? ??????????????????????
                            </span>
                                <input
                                    value={fourteen.region}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            region: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ?????????? ?????????? ??????????????????????
                            </span>
                                <input
                                    value={fourteen.city}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            city: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ??????????
                            </span>
                                <input
                                    value={fourteen.OKTMO}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            OKTMO: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ??????????
                            </span>
                                <input
                                    value={fourteen.street}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            street: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ??????
                            </span>
                                <input
                                    value={fourteen.building}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            building: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ????????????
                            </span>
                                <input
                                    value={fourteen.corpus}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            corpus: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ????????????????
                            </span>
                                <input
                                    value={fourteen.flat}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            flat: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ?????????? ????????????????
                            </span>
                                <input
                                    value={fourteen.telephone}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            telephone: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ???????????? ?????????????????????? ??????????
                            </span>
                                <input
                                    value={fourteen.email}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            email: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ??????
                            </span>
                                <input
                                    value={fourteen.INN}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            INN: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group mb-1">
                            <span className="input-group-text w-50 d-flex justify-content-center">
                                ???????? ???????????????????? ???? ????????
                            </span>
                                <input
                                    value={fourteen.dateLast}
                                    onChange={(e) =>
                                        setFourteen((prev) => ({
                                            ...prev,
                                            dateLast: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center mb-5">
                        <div className="btn btn-outline-secondary w-25" onClick={()=>validate()}>
                            ????????????????
                        </div>
                    </div>
                </div>}
        </div>
    );
};

const mapStateProps = (state) => {
    const info = state.authModalReducer;
    return { info };
};

const mapDispatchProps = (dispatch) => bindActionCreators({
    setModal,
    fetchGetDocumentById,
}, dispatch);

export const EditDocumentPage = connect(
    mapStateProps,
    mapDispatchProps
)(EditDocumentPageLayout);
