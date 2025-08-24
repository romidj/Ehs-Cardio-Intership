import db from "../db.js";

export const createRdv = (req, res) => {
  const {
    name,            
    phone,           
    date_naissance,  
    wilaya,          
    nom_service,     
    commentaire,
    sex                
  } = req.body;

  // Basic checks
  if (!name || !phone || !date_naissance || !wilaya || !nom_service || !commentaire || !sex ) {
    console.error("Validation error: missing required fields", req.body);
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  // 1) Find the service
  const qService = "SELECT id_service FROM services WHERE nom_service = ?";

  db.query(qService, [nom_service], (errSvc, svcRows) => {
    if (errSvc) {
      console.error("Erreur lors de la récupération du service:", errSvc);
      return res.status(500).json({ error: "Erreur service." });
    }
    if (!svcRows.length) {
      console.error("Service introuvable:", nom_service);
      return res.status(404).json({ error: "Service introuvable." });
    }

    const id_service = svcRows[0].id_service;

    // 2) Check if patient exists by phone
    const qFindPatient = "SELECT id_patient FROM patients WHERE telephone = ?";
    db.query(qFindPatient, [phone], (errP, pRows) => {
      if (errP) {
        console.error("Erreur lors de la recherche du patient:", errP);
        return res.status(500).json({ error: "Erreur patient (recherche)." });
      }

      const insertRdvForPatient = (id_patient) => {
        // 3) Insert RDV
        const qInsRdv = `
          INSERT INTO rdv (id_patient, id_medecin, id_service, ordonnance_url, date_rdv, heure_rdv, sms_envoye, statut, commentaire)
          VALUES (?, NULL, ?, NULL, NULL, NULL, 0, 'attente', ?) 
        `;
        db.query(qInsRdv, [id_patient, id_service, commentaire], (errR, rdvRes) => {
          if (errR) {
            console.error("Erreur lors de la création du RDV:", errR);
            return res.status(500).json({ error: "Erreur RDV." });
          }
          return res.status(201).json({
            message: "Rendez-vous enregistré.",
            id_rdv: rdvRes.insertId
          });
        });
      };

      if (pRows.length) {
        console.log("Patient existant trouvé, id:", pRows[0].id_patient);
        insertRdvForPatient(pRows[0].id_patient);
      } else {
        // create new patient
        const qInsPatient = `
          INSERT INTO patients (nom_prenom, date_naissance, wilaya, telephone, sex)
          VALUES (?, ?, ?, ?, ?)
        `;
        db.query(qInsPatient, [name, date_naissance, wilaya, phone, sex], (errIns, insRes) => {
          if (errIns) {
            console.error("Erreur lors de la création du patient:", errIns);
            return res.status(500).json({ error: "Erreur création patient." });
          }
          console.log("Nouveau patient créé, id:", insRes.insertId);
          insertRdvForPatient(insRes.insertId);
        });
      }
    });
  });
};
