const A_Submissions = [];

A_Submissions.push(10);
for (let i = 1; i <= 90; i++) {
  A_Submissions.push(
    A_Submissions[A_Submissions.length - 1] + Math.floor(Math.random() * 200)
  );
}
const B_Submissions = [];

B_Submissions.push(10);
for (let i = 1; i <= 90; i++) {
  B_Submissions.push(
    B_Submissions[B_Submissions.length - 1] + Math.floor(Math.random() * 150)
  );
}
const C_Submissions = [];

C_Submissions.push(10);
for (let i = 1; i <= 90; i++) {
  C_Submissions.push(
    C_Submissions[C_Submissions.length - 1] + Math.floor(Math.random() * 100)
  );
}
const D_Submissions = [];

D_Submissions.push(10);
for (let i = 1; i <= 90; i++) {
  D_Submissions.push(
    D_Submissions[D_Submissions.length - 1] + Math.floor(Math.random() * 50)
  );
}

export { A_Submissions, B_Submissions, C_Submissions, D_Submissions };
