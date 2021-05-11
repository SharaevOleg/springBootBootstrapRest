package web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import web.dao.RoleDao;
import web.dao.UserDao;
import web.model.Role;
import web.model.User;

import java.util.List;
import java.util.Set;

@Service
public class UserServiceImp implements UserService {

    private UserDao userDao;
    private RoleDao roleDao;

    @Autowired
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Autowired
    public void setRoleDao(RoleDao roleDao) {
        this.roleDao = roleDao;
    }
    @Transactional
    @Override
    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }
    @Transactional
    @Override
    public void create(User user) {
        userDao.create(user);
    }
    @Transactional
    @Override
    public void remove(Long id) {
        userDao.remove(id);
    }
    @Transactional
    @Override
    public void update(User user) {
        userDao.update(user);
    }
    @Transactional
    @Override
    public User getUser(Long id) {
        return userDao.getUser(id);
    }
    @Transactional
    @Override
    public User getUserByName(String name) {
        return userDao.getUserByName(name);
    }
    @Transactional
    @Override
    public void newRole(Set<Role> roles) {
        roleDao.newRole(roles);
    }
    @Transactional
    @Override
    public Set<Role> getRole() {
        return roleDao.getRole();
    }
}