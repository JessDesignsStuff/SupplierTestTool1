// External dependencies
const express = require("express");

const router = express.Router();
router.post(
  "/v1/contact-answer",
  function (req, res) {
    var Upload = req.session.data["contact"];
    if (Upload == "primary care") {
      res.redirect("/v1/primary-prescription-summary");
    }

    if (Upload == "phone") {
      res.redirect("/v1/secondary-prescription-summary");
    }
    if (Upload == "text") {
      res.redirect("/v1/testpack-prescription-summary");
    }
  },

  router.post("/v2/contact-answer", function (req, res) {
    var Uploads = req.session.data["contact"];
    if (Uploads == "primary-care") {
      res.redirect("/v2/prescription-summary");
    }

    if (Uploads == "secondary-care") {
      res.redirect("/v2/prescription-summary");
    }
    if (Uploads == "test-pack") {
      res.redirect("/v2/testpack-prescription-summary");
    }
    if (Uploads == "presc-files") {
      res.redirect("/v2/testpack-prescription-summary");
    }
  }),

  router.post("/v3/contact-answer", function (req, res) {
    var Uploads = req.session.data["contact"];
    if (Uploads == "primary-care") {
      res.redirect("/v3/prescription-summary");
    }

    if (Uploads == "secondary-care") {
      res.redirect("/v3/prescription-summary");
    }
    if (Uploads == "test-pack") {
      res.redirect("/v3/pack-prescription-summary");
    }
    if (Uploads == "presc-files") {
      res.redirect("/v3/pack-prescription-summary");
    }
    if (Uploads == "paste-files") {
      res.redirect("/v3/pack-prescription-summary");
    }
  }),

  // Add your routes here - above the module.exports line

  (module.exports = router)
);

//branchinng v2

//
//router.post(
// "/v2/contact-answer",
//function (req, res) {
//var Uploads = req.session.data["contact"];
//if (Uploads == "primary care") {
//    res.redirect("/v2/prescription-summary");
//  }

//   if (Uploads == "phone") {
//  res.redirect("/v2/prescription-summary");
//  }
//  if (Uploads == "text") {
//    res.redirect("/v2/testpack-prescription-summary");
//  }
//},

// Clear session data for admintoolV1 prototype
function clearAdminFormData(req) {
  delete req.session.data.ServiceNowNumber;
  delete req.session.data.NewODSCode;
  delete req.session.data["file-hint"];
}

router.get("/admintoolV1/clear-and-start", (req, res) => {
  clearAdminFormData(req);
  res.redirect("/admintoolV1/start-page");
});

router.get("/admintoolV1/clear-and-processing", (req, res) => {
  clearAdminFormData(req);
  res.redirect("/admintoolV1/processing-page");
});

// Clear session data for admintoolV1a prototype
function clearAdminFormData1a(req) {
  delete req.session.data.ServiceNowNumber;
  delete req.session.data.NewODSCode;
  delete req.session.data.OldODSCode;
  delete req.session.data.ServiceNowNumberRem;
  delete req.session.data.OldODSCodeRem;
  delete req.session.data["file-hint"];
}
router.get("/admintoolV1a/clear-and-start", (req, res) => {
  clearAdminFormData1a(req);
  res.redirect("/admintoolV1a/start-page");
});

router.get("/admintoolV1a/clear-and-processing", (req, res) => {
  clearAdminFormData1a(req);
  res.redirect("/admintoolV1a/processing-page");
});