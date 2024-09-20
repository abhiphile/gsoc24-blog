import { Divider, Image, Typography } from "antd";
import { FaCodePullRequest } from "react-icons/fa6";
import Navbar from "../Navbar";
import Anchors from "../assets/Anchors";
import Footer from "../assets/Footer";
const { Title, Paragraph } = Typography;

const Week11 = () => {
  const code1 =
    `
    >>> from sympy import symbols, Matrix
    >>> from sympy.physics.control import *
    >>> m, k, b = symbols('m k b')
    >>> A = Matrix([[0, 1], [-k/m, -b/m]])
    >>> B = Matrix([[0], [1/m]])
    >>> C = Matrix([[1, 0]])
    >>> D = Matrix([[0]])
    >>> ss = StateSpace(A, B, C, D)
    >>> ss
    StateSpace(Matrix([
    [   0,    1],
    [-k/m, -b/m]]), Matrix([
    [  0],
    [1/m]]), Matrix([[1, 0]]), Matrix([[0]]))
    >>> tf = ss.rewrite(TransferFunction)[0][0]
    >>> tf
    TransferFunction(1, b*s + k + m*s**2, s)
`
  const code2 =
    `
   >>> from sympy import symbols, Matrix
   >>> from sympy.physics.control import StateSpace
   >>> K_r, J1, J2, B_r1, B_r2, x2 = symbols('K_r J1 J2 B_r1 B_r2 x2')
   >>> A = Matrix([[0, 1, 0], [-K_r/J1, -B_r1/J1, B_r1/J1], [0, B_r1/J2 * x2, - (B_r2 + B_r1)/J2]])
   >>> B = Matrix([[0], [-1/J1], [0]])
   >>> C = Matrix([[1, 0, 0]])
   >>> ss = StateSpace(A, B, C)
   >>> ss
   StateSpace(Matrix([
   [      0,          1,                 0],
   [-K_r/J1,   -B_r1/J1,           B_r1/J1],
   [      0, B_r1*x2/J2, (-B_r1 - B_r2)/J2]]), Matrix([
   [    0],
   [-1/J1],
   [    0]]), Matrix([[1, 0, 0]]), Matrix([[0]]))
`
  const code3 =
`
    >>> from sympy import Matrix, symbols, pprint
    >>> from sympy.physics.control import *
    >>> R, L, C = symbols('R L C')
    >>> A = Matrix([[-R/L, -1/L], [1/C, 0]])
    >>> B = Matrix([[1/L], [0]])
    >>> C = Matrix([[0, 1]])
    >>> D = Matrix([[0]])
    >>> ss = StateSpace(A, B, C, D)
    >>> ss
    StateSpace(Matrix([
    [-R/L, -1/L],
    [ 1/C,    0]]), Matrix([
    [1/L],
    [  0]]), Matrix([[0, 1]]), Matrix([[0]]))

    We can convert the StateSpace to TransferFunction by rewrite method.

    >>> tf = ss.rewrite(TransferFunction)[0][0]
    >>> tf
    TransferFunction(1, C*L*s**2 + C*R*s + 1, s)
`
  const code4 =
`
    >>> from sympy import symbols, Matrix
    >>> from sympy.physics.control import *
    >>> R, C = symbols('R C')
    >>> A = Matrix([[-2/(R*C), 1/(R*C)], [1/(R*C), -1/(R*C)]])
    >>> B = Matrix([[1/(R*C)], [0]])
    >>> C = Matrix([[0, 1]])
    >>> ss = StateSpace(A, B, C)
    >>> ss
    StateSpace(Matrix([
    [-2/(C*R),  1/(C*R)],
    [ 1/(C*R), -1/(C*R)]]), Matrix([
    [1/(C*R)],
    [      0]]), Matrix([[0, 1]]), Matrix([[0]]))
`

  const imgLink1 = 'https://private-user-images.githubusercontent.com/140839576/362171513-b3eaa366-2a9f-435e-a3ae-a446eb093723.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY4MzM2MjAsIm5iZiI6MTcyNjgzMzMyMCwicGF0aCI6Ii8xNDA4Mzk1NzYvMzYyMTcxNTEzLWIzZWFhMzY2LTJhOWYtNDM1ZS1hM2FlLWE0NDZlYjA5MzcyMy5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyMFQxMTU1MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMzdkZmQ5NzU3MTZjMzhjNTE3MWE4NjVhNDIxOTgwZGQxMWQwMTQ1YzFhNTQ5OTFjMzVlMTc2NjJhZmFjZDAzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AWr9cwU51ZmaPHEB3MX_s9nu7AuhA23ox1e6Q_hJCEs'
  const imgLink2 = 'https://private-user-images.githubusercontent.com/140839576/363419846-a7acfd1d-df4c-4a52-8ab0-c179a86d3415.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY4MzQwMTAsIm5iZiI6MTcyNjgzMzcxMCwicGF0aCI6Ii8xNDA4Mzk1NzYvMzYzNDE5ODQ2LWE3YWNmZDFkLWRmNGMtNGE1Mi04YWIwLWMxNzlhODZkMzQxNS5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyMFQxMjAxNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMjdiNTA0NDA4OThkYzE4NjRlZGZjNTdiZDgzNGE1Yjc0MDY0NTUzOGU4ZDdiY2MwZTY1YmJkYmEyN2JlODA3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.cjdTAw3x7siZ9oaphd9AHt1ZCFkXQZiPrxF_P5PIhLg'
  const imgLink3 = 'https://raw.githubusercontent.com/abhiphile/sympy/refs/heads/problems-1/doc/src/tutorials/physics/control/Electrical_Problems_Q1.svg'
  const imgLink4 = 'https://raw.githubusercontent.com/abhiphile/sympy/refs/heads/problems-1/doc/src/tutorials/physics/control/Electrical_Problems_Q2.svg'

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Anchors />
        </div>
        <div className="col m-2">
          <div className="m-2 border rounded p-4">
            <Typography>
              <Title>
                Week 11-12: Adding example problems related to StateSpace
              </Title>
              <Paragraph className="par">
                In these two weeks I've worked on adding example problems related to StateSpace in control examples.
                These include mechanics and electrical problems.

                <Title level={2}>
                  Mechanics Problem using StateSpace
                </Title>
                I've added two mechanics probems that can be modelled using StateSpace. The complete documentation for this can be found <a href="https://docs.sympy.org/dev/tutorials/physics/control/mechanics_problems.html">here.</a>
                <Title level={3}>1. Spring Mass Damper System</Title>
                <Image src={imgLink1}></Image>
                <p>
                  A spring-mass-damping system can be modeled using a mass (m), a spring with a constant (k), and a damper with a damping coefficient (b). The spring force is proportional to the displacement of the mass, and the damping force is proportional to the velocity of the mass. Find the frequency response of the system.
                  To model this type of system we have used this.
                  <pre>
                    {code1}
                  </pre>
                </p>
                <Title level={3}>2. Rotational System</Title>
                <Image src={imgLink2}></Image>
                <p>
                  This problem explains how to model a rotaional system to state-space model. The system has input torque and damping effects. The system consists of two flywheels connected by a spring. We need to model the sytem by using StateSpace.
                  To model this we have used this.
                  <pre>
                    {code2}
                  </pre>
                </p>

                <Title level={2}>Electrical Problem using StateSpace</Title>
                Complete documentation for this can be found <a href="https://docs.sympy.org/dev/tutorials/physics/control/electrical_problems.html">here.</a>
                <Title level={3}>1. Simple RLC Circuit</Title>
                <Image src={imgLink3}></Image>
                <p>
                  In a series RLC circuit, we have a resistor (R) , an inductor (L), and a capacitor (C) connected in series with an input voltage (Vin)
                  . The state variables are the current through the inductor (i(t)) and the voltage across the capacitor (Vc(t)). We need to model the system to StateSpace. To model this system we can use the following code.
                  <pre>{code3}</pre>
                </p>
                <Title level={3}>2. An Advanced problem.</Title>
                <Image src={imgLink4}></Image>
                <p>
                  Obtain the state model for a system represented by an electrical system as shown above. To model it using SymPy we can use the following code,
                  <pre>{code4}</pre>
                </p>
              </Paragraph>
              <Title>Pull Requests</Title>
              <Paragraph className="par">
                <a
                  href="https://github.com/sympy/sympy/pull/27009"
                  className="text-success"
                >
                  <FaCodePullRequest /> (Merged) Added mechanics problems to control tutorials.
                </a>
                <br />
                <a
                  href="https://github.com/sympy/sympy/pull/26978"
                  className="text-success"
                >
                  <FaCodePullRequest /> (Merged) Added electrical problems to electrical_problems file.
                </a>
                <div className="gap-3">
                  <Divider />
                </div>
                Abhishek Kumar
                <br />
                GSoC Contributor
              </Paragraph>
            </Typography>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Week11;
