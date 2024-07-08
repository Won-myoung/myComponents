import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import "./css/Accordi.css";
import { Link } from "react-router-dom";

export default function Accordi() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Main01</Accordion.Header>
        <Accordion.Body>
          <ul className="Accordi">
            <li>
              <Link to="#">서브메뉴01</Link>
            </li>
            <li>
              <Link to="#">서브메뉴02</Link>
            </li>
            <li>
              <Link to="#">서브메뉴03</Link>
            </li>
            <li>
              <Link to="#">서브메뉴04</Link>
            </li>
            <li>
              <Link to="#">서브메뉴05</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Main02</Accordion.Header>
        <Accordion.Body>
          <ul className="Accordi">
            <li>
              <Link to="#">서브메뉴01</Link>
            </li>
            <li>
              <Link to="#">서브메뉴02</Link>
            </li>
            <li>
              <Link to="#">서브메뉴03</Link>
            </li>
            <li>
              <Link to="#">서브메뉴04</Link>
            </li>
            <li>
              <Link to="#">서브메뉴05</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Main03</Accordion.Header>
        <Accordion.Body>
          <ul className="Accordi">
            <li>
              <Link to="#">서브메뉴01</Link>
            </li>
            <li>
              <Link to="#">서브메뉴02</Link>
            </li>
            <li>
              <Link to="#">서브메뉴03</Link>
            </li>
            <li>
              <Link to="#">서브메뉴04</Link>
            </li>
            <li>
              <Link to="#">서브메뉴05</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Main04</Accordion.Header>
        <Accordion.Body>
          <ul className="Accordi">
            <li>
              <Link to="#">서브메뉴01</Link>
            </li>
            <li>
              <Link to="#">서브메뉴02</Link>
            </li>
            <li>
              <Link to="#">서브메뉴03</Link>
            </li>
            <li>
              <Link to="#">서브메뉴04</Link>
            </li>
            <li>
              <Link to="#">서브메뉴05</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Main05</Accordion.Header>
        <Accordion.Body>
          <ul className="Accordi">
            <li>
              <Link to="#">서브메뉴01</Link>
            </li>
            <li>
              <Link to="#">서브메뉴02</Link>
            </li>
            <li>
              <Link to="#">서브메뉴03</Link>
            </li>
            <li>
              <Link to="#">서브메뉴04</Link>
            </li>
            <li>
              <Link to="#">서브메뉴05</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Main06</Accordion.Header>
        <Accordion.Body>
          <ul className="Accordi">
            <li>
              <Link to="#">서브메뉴01</Link>
            </li>
            <li>
              <Link to="#">서브메뉴02</Link>
            </li>
            <li>
              <Link to="#">서브메뉴03</Link>
            </li>
            <li>
              <Link to="#">서브메뉴04</Link>
            </li>
            <li>
              <Link to="#">서브메뉴05</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
