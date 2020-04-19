const express = require('express');
const router = express.Router();
const Subjects = require('../models/Model');

router.route('/')
.get((req,res,next) => {
    Subjects.find({})
    .then((subjects) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(subjects);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Subjects.create(req.body)
    .then((subject) => {
        console.log('subject Created ', subject);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(subject);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /subjects');
})
.delete((req, res, next) => {
    Subjects.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

router.route('/:subjectId')
.get((req,res,next) => {
    Subjects.findById(req.params.subjectId)
    .then((subject) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(subject);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /subjects/'+ req.params.subjectId);
})
.put((req, res, next) => {
    Subjects.findByIdAndUpdate(req.params.subjectId, {
        $set: req.body
    }, { new: true })
    .then((subject) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(subject);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Subjects.findByIdAndDelete(req.params.subjectId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.route('/:subjectId/assignments')
.get((req,res,next) => {
    Subjects.findById(req.params.Id)
    .then((subjects) => {
      if(subject !=null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(subjects);
      }
      else {
        err = new Error('subject' + req.params.subjectId + 'not found');
        err.status = 404;
        return next(err);
      }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null) {
          subject.assignments.push(req.body);
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /subjects/'
      + req.params.subjectId + '/assignments');
})
.delete((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null) {
          for (var i = (subject.assignments.length -1); i >= 0; i--) {
              subject.assignments.id(subject.assignments[i]._id).remove();
          }
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
  }, (err) => next(err))
  .catch((err) => next(err));    
});

router.route('/:subjectId/assignments/:assignmentId')
.get((req,res,next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.assignments.id(req.params.assignmentId) != null) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(subject.assignments.id(req.params.assignmentId));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('assignment ' + req.params.assignmentId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /subjects/'+ req.params.subjectId
      + '/assignments/' + req.params.assignmentId);
})
.put((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.assignments.id(req.params.assignmentId) != null) {
          if (req.body.rating) {
              subject.assignments.id(req.params.assignmentId).rating = req.body.rating;
          }
          if (req.body.assignment) {
              subject.assignments.id(req.params.assignmentId).assignment = req.body.assignment;                
          }
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('assignment ' + req.params.assignmentId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.delete((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.assignments.id(req.params.assignmentId) != null) {
          subject.assignments.id(req.params.assignmentId).remove();
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('assignment ' + req.params.assignmentId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.route('/:subjectId/notes')
.get((req,res,next) => {
    Subjects.findById(req.params.Id)
    .then((subjects) => {
      if(subject !=null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(subjects);
      }
      else {
        err = new Error('subject' + req.params.subjectId + 'not found');
        err.status = 404;
        return next(err);
      }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null) {
          subject.notes.push(req.body);
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /subjects/'
      + req.params.subjectId + '/notes');
})
.delete((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null) {
          for (var i = (subject.notes.length -1); i >= 0; i--) {
              subject.notes.id(subject.notes[i]._id).remove();
          }
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
  }, (err) => next(err))
  .catch((err) => next(err));    
});

router.route('/:subjectId/notes/:noteId')
.get((req,res,next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.notes.id(req.params.noteId) != null) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(subject.notes.id(req.params.noteId));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('note ' + req.params.noteId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /subjects/'+ req.params.subjectId
      + '/notes/' + req.params.noteId);
})
.put((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.notes.id(req.params.noteId) != null) {
          if (req.body.rating) {
              subject.notes.id(req.params.noteId).rating = req.body.rating;
          }
          if (req.body.note) {
              subject.notes.id(req.params.noteId).note = req.body.note;                
          }
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('note ' + req.params.noteId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.delete((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.notes.id(req.params.noteId) != null) {
          subject.notes.id(req.params.noteId).remove();
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('note ' + req.params.noteId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.route('/:subjectId/notices')
.get((req,res,next) => {
    Subjects.findById(req.params.Id)
    .then((subjects) => {
      if(subject !=null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(subjects);
      }
      else {
        err = new Error('subject' + req.params.subjectId + 'not found');
        err.status = 404;
        return next(err);
      }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null) {
          subject.notices.push(req.body);
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /subjects/'
      + req.params.subjectId + '/notices');
})
.delete((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null) {
          for (var i = (subject.notices.length -1); i >= 0; i--) {
              subject.notices.id(subject.notices[i]._id).remove();
          }
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
  }, (err) => next(err))
  .catch((err) => next(err));    
});

router.route('/:subjectId/notices/:noticeId')
.get((req,res,next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.notices.id(req.params.noticeId) != null) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(subject.notices.id(req.params.noticeId));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('notice ' + req.params.noticeId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /subjects/'+ req.params.subjectId
      + '/notices/' + req.params.noticeId);
})
.put((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.notices.id(req.params.noticeId) != null) {
          if (req.body.rating) {
              subject.notices.id(req.params.noticeId).rating = req.body.rating;
          }
          if (req.body.notice) {
              subject.notices.id(req.params.noticeId).notice = req.body.notice;                
          }
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('notice ' + req.params.noticeId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
.delete((req, res, next) => {
  Subjects.findById(req.params.subjectId)
  .then((subject) => {
      if (subject != null && subject.notices.id(req.params.noticeId) != null) {
          subject.notices.id(req.params.noticeId).remove();
          subject.save()
          .then((subject) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(subject);                
          }, (err) => next(err));
      }
      else if (subject == null) {
          err = new Error('subject ' + req.params.subjectId + ' not found');
          err.status = 404;
          return next(err);
      }
      else {
          err = new Error('notice ' + req.params.noticeId + ' not found');
          err.status = 404;
          return next(err);            
      }
  }, (err) => next(err))
  .catch((err) => next(err));
});


module.exports = router;