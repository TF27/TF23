import styles from '../accommodation.module.css'

const Register = () =>{

  return(
<div className={styles['register-kar']}>
<div className={styles['check-kar']}>
<div className={styles['check-rect1']}>
  <div className={styles['check-rect2']}>
  <h4>Check-in</h4>
                   <h6>December 2023</h6>
                   <div className={styles['round-main']}>
                       <div className={styles['round']} onclick="checkin(this, 15)" id="i15"><h6>26</h6></div>
                        <div className={styles['round']} onclick="checkin(this, 16)" id="i16"><h6>27</h6></div>
                        <div className={styles['round']} onclick="checkin(this, 17)" id="i17"><h6>28</h6></div>
                        <div className={styles['round']} onclick="checkin(this, 18)" id="i18"><h6>29</h6></div>
                       <div className={styles['round']} onclick="checkin(this, 19)" id="i19"><h6>30</h6></div>
                   </div>
  </div>
</div>
<div className={styles['check-rect1']}>
  <div className={styles['check-rect2']}>
  <h4>Check-out</h4>
                   <h6>December 2023</h6>
                   <div className={styles['round-main']}>
                       <div className={styles['round']} onclick="checkin(this, 15)" id="i15"><h6>26</h6></div>
                        <div className={styles['round']} onclick="checkin(this, 16)" id="i16"><h6>27</h6></div>
                        <div className={styles['round']} onclick="checkin(this, 17)" id="i17"><h6>28</h6></div>
                        <div className={styles['round']} onclick="checkin(this, 18)" id="i18"><h6>29</h6></div>
                       <div className={styles['round']} onclick="checkin(this, 19)" id="i19"><h6>30</h6></div>
                   </div>
  </div>
</div>
</div>
<div className={styles['people-rect1']}>
  <div className={styles['people-rect2']}>
    
  </div>
</div>
</div>
  )
}

export default Register;