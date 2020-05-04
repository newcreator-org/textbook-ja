workflow "Install and Textlint" {
  on = "push"
  resolves = ["Textlint"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Textlint" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "textlint"
}